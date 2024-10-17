'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { AlertCircle } from 'lucide-react'

export function LoginPage(): JSX.Element {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent): void => {
    e.preventDefault()
    setError('')

    if (!email || !password) {
      return setError('Please fill in all fields')
    }

    await new Promise(resolve => setTimeout(resolve, 1000))

    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-[550px] p-5">
        <CardHeader>
          <CardTitle className='text-center text-2xl text-darker tracking-wide'>Login</CardTitle>
          <CardDescription className='text-center text-sm mt-2'>Digite o seu email para continuar.</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit} className='mt-5'>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-2.5">
                <Label htmlFor="email" className='text-darker'>Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Ex: henrique.de.melo.cristioglu@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col space-y-2.5 mt-3">
                <Label htmlFor="password" className='text-darker'>Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Ex: henrique123"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button className="w-full" type="submit">Login</Button>
          </CardFooter>
        </form>
        {error && (
          <Alert variant="destructive" className="mt-4 mx-6 mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
      </Card>
    </div>
  )
}
