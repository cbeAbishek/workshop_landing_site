import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Cpu, Layers, Lightbulb, Rocket, Zap } from "lucide-react"

export default function Agenda() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Workshop Agenda</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive two-day program covering essential React topics
          </p>
        </div>

        <Tabs defaultValue="day1" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="day1">Day 1</TabsTrigger>
            <TabsTrigger value="day2">Day 2</TabsTrigger>
          </TabsList>

          <TabsContent value="day1">
            <div className="space-y-6">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="h-10 w-10 flex items-center justify-center bg-rose-100 text-rose-600 rounded-full">
                    <Rocket className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle>9:00 AM - 10:30 AM</CardTitle>
                    <CardDescription>Modern React Fundamentals</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Review of core React concepts, hooks, and the latest features in React 18+. We'll establish a solid
                    foundation for the advanced topics to follow.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="h-10 w-10 flex items-center justify-center bg-rose-100 text-rose-600 rounded-full">
                    <Code className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle>10:45 AM - 12:30 PM</CardTitle>
                    <CardDescription>Advanced Component Patterns</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Explore compound components, render props, higher-order components, and custom hooks. Learn when and
                    how to use each pattern effectively.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="h-10 w-10 flex items-center justify-center bg-rose-100 text-rose-600 rounded-full">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle>1:30 PM - 3:15 PM</CardTitle>
                    <CardDescription>State Management Strategies</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Compare different state management approaches including Context API, Redux Toolkit, Zustand, and
                    Jotai. Understand the trade-offs and best use cases.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="h-10 w-10 flex items-center justify-center bg-rose-100 text-rose-600 rounded-full">
                    <Lightbulb className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle>3:30 PM - 5:00 PM</CardTitle>
                    <CardDescription>Hands-on Project (Part 1)</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Apply the concepts learned in a guided project. Build a feature-rich application implementing
                    advanced patterns and state management.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="day2">
            <div className="space-y-6">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="h-10 w-10 flex items-center justify-center bg-rose-100 text-rose-600 rounded-full">
                    <Cpu className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle>9:00 AM - 10:30 AM</CardTitle>
                    <CardDescription>Performance Optimization</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Learn techniques for identifying and resolving performance bottlenecks. Explore memoization,
                    virtualization, and code splitting strategies.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="h-10 w-10 flex items-center justify-center bg-rose-100 text-rose-600 rounded-full">
                    <Layers className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle>10:45 AM - 12:30 PM</CardTitle>
                    <CardDescription>Testing React Applications</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Implement comprehensive testing strategies using React Testing Library and Jest. Cover unit tests,
                    integration tests, and end-to-end testing approaches.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="h-10 w-10 flex items-center justify-center bg-rose-100 text-rose-600 rounded-full">
                    <Code className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle>1:30 PM - 3:15 PM</CardTitle>
                    <CardDescription>Server Components & Data Fetching</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Explore React Server Components and modern data fetching patterns. Learn how to implement efficient
                    data loading with Suspense and streaming.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="h-10 w-10 flex items-center justify-center bg-rose-100 text-rose-600 rounded-full">
                    <Lightbulb className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle>3:30 PM - 5:00 PM</CardTitle>
                    <CardDescription>Hands-on Project (Part 2) & Wrap-up</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Complete the project implementation, incorporating performance optimizations and testing. Final Q&A
                    session and discussion of best practices.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
