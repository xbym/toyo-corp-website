"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast"

interface Section {
  id: string
  title: string
  content?: string
  items?: Array<{ title: string, description: string }>
  imageUrl?: string
}

export default function HomepageAdmin() {
  const [sections, setSections] = useState<Section[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [uploadingSectionId, setUploadingSectionId] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/getHomepage')
      .then(response => response.json())
      .then(data => {
        setSections(data)
        setIsLoading(false)
      })
      .catch(error => {
        console.error('Error fetching homepage data:', error)
        setIsLoading(false)
      })
  }, [])

  const handleInputChange = (sectionId: string, index: number | null, field: 'title' | 'description' | 'content', value: string) => {
    setSections(prevSections =>
      prevSections.map(section => {
        if (section.id === sectionId) {
          if (index !== null && section.items) {
            return {
              ...section,
              items: section.items.map((item, i) => 
                i === index ? { ...item, [field]: value } : item
              )
            }
          } else {
            return { ...section, [field]: value }
          }
        }
        return section
      })
    )
  }

  const handleSave = async (sectionId: string) => {
    try {
      const response = await fetch('/api/updateHomepage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sections),
      })

      if (!response.ok) {
        throw new Error('Failed to update homepage data')
      }

      const result = await response.json()
      console.log(result.message)

      toast({
        title: "更新成功",
        description: `${sectionId} 部分已成功更新。`,
      })
    } catch (error) {
      console.error('Error saving section:', error)
      toast({
        title: "更新失败",
        description: "保存更改时发生错误，请稍后重试。",
        variant: "destructive",
      })
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleUpload = async (sectionId: string) => {
    if (!selectedFile) {
      toast({
        title: "上传失败",
        description: "请先选择一个文件。",
        variant: "destructive",
      })
      return
    }

    setUploadingSectionId(sectionId)

    const formData = new FormData()
    formData.append('file', selectedFile)

    try {
      const response = await fetch(`/api/upload?filename=${encodeURIComponent(selectedFile.name)}`, {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Failed to upload image')
      }

      const data = await response.json()

      setSections(prevSections =>
        prevSections.map(section =>
          section.id === sectionId ? { ...section, imageUrl: data.url } : section
        )
      )

      toast({
        title: "上传成功",
        description: "图片已成功上传并更新。",
      })
    } catch (error) {
      console.error('Error uploading image:', error)
      toast({
        title: "上传失败",
        description: "上传图片时发生错误，请稍后重试。",
        variant: "destructive",
      })
    } finally {
      setUploadingSectionId(null)
      setSelectedFile(null)
    }
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">首页内容管理</h1>
      <Tabs defaultValue="ads">
        <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
          {sections.map(section => (
            <TabsTrigger key={section.id} value={section.id}>{section.title}</TabsTrigger>
          ))}
        </TabsList>
        {sections.map(section => (
          <TabsContent key={section.id} value={section.id}>
            <Card>
              <CardHeader>
                <CardTitle>{section.title}设置</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {section.items ? (
                  section.items.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <Label htmlFor={`${section.id}-title-${index}`}>标题 {index + 1}</Label>
                      <Input
                        id={`${section.id}-title-${index}`}
                        value={item.title}
                        onChange={(e) => handleInputChange(section.id, index, 'title', e.target.value)}
                      />
                      {item.description !== undefined && (
                        <>
                          <Label htmlFor={`${section.id}-description-${index}`}>描述 {index + 1}</Label>
                          <Textarea
                            id={`${section.id}-description-${index}`}
                            value={item.description}
                            onChange={(e) => handleInputChange(section.id, index, 'description', e.target.value)}
                          />
                        </>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="space-y-2">
                    <Label htmlFor={`${section.id}-content`}>内容</Label>
                    <Textarea
                      id={`${section.id}-content`}
                      value={section.content}
                      onChange={(e) => handleInputChange(section.id, null, 'content', e.target.value)}
                    />
                  </div>
                )}
                <div className="space-y-2">
                  <Label htmlFor={`${section.id}-image`}>图片上传</Label>
                  <Input
                    id={`${section.id}-image`}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                  <Button 
                    onClick={() => handleUpload(section.id)}
                    disabled={uploadingSectionId === section.id}
                  >
                    {uploadingSectionId === section.id ? '上传中...' : '上传图片'}
                  </Button>
                  {section.imageUrl && (
                    <div className="relative w-full h-48">
                      <Image
                        src={section.imageUrl}
                        alt={`${section.title} 图片`}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  )}
                </div>
                <Button onClick={() => handleSave(section.id)}>保存更改</Button>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}