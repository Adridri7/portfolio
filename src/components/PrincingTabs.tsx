import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { UsersRound, Rocket, Globe } from "lucide-react";

import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { Label } from "@/components/ui/label"
import SparklesText from "@/components/magicui/sparkles-text";
import BoxReveal from "@/components/magicui/box-reveal";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

export function PricingTabs() {
    return (
        <Tabs defaultValue="account" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="free">Free</TabsTrigger>
                <TabsTrigger value="basic">Basic</TabsTrigger>
                <TabsTrigger value="pro">Pro</TabsTrigger>
            </TabsList>
            <TabsContent value="free">
                <Card>
                    <CardHeader >
                        <CardTitle className="flex">Free&nbsp;<Globe className="h-6 w-6 mr-2 text-blue-500" stroke-width="2" stroke="#495057" /></CardTitle>
                        <CardDescription>
                           Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <ul>
                            <li className="space-y-3"><Label>- Fonctionnalité 1</Label></li>
                            <li className="space-y-3"><Label>- Fonctionnalité 2</Label></li>
                            <li className="space-y-3"><Label>- Fonctionnalité 3</Label></li>
                            <li className="space-y-3"><Label>- Fonctionnalité 4</Label></li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <AnimatedGradientTextDemo />
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="basic">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex">
                            Basique&nbsp;
                            <UsersRound className="h-6 w-6 mr-2 text-blue-500" stroke-width="2" />
                        </CardTitle>
                        <BoxReveal boxColor={"#a9d6e5"} duration={0.5}>
                            <CardDescription>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium illum ea ut eaque unde optio.
                            </CardDescription>
                        </BoxReveal>
                    </CardHeader>

                    <CardContent className="space-y-2">
                        <BoxReveal boxColor={"#61a5c2"} duration={0.5}>
                            <ul>
                            <li className="space-y-3"><Label>- Fonctionnalité 1</Label></li>
                            <li className="space-y-3"><Label>- Fonctionnalité 2</Label></li>
                            <li className="space-y-3"><Label>- Fonctionnalité 3</Label></li>
                            <li className="space-y-3"><Label>- Fonctionnalité 4</Label></li>
                            <li className="space-y-3"><Label>- Fonctionnalité 5</Label></li>
                            </ul>
                        </BoxReveal>
                    </CardContent>

                    <CardFooter>
                        <Button style={{ backgroundColor: '#2c7da0' }}>Acheter</Button>
                    </CardFooter>

                </Card>
            </TabsContent >
            <TabsContent value="pro">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex" ><SparklesText sparklesCount={4} text="Pro" />&nbsp;<Rocket className="h-6 w-6 mr-2 text-blue-500" stroke-width="2" stroke="#9D4EDD" /></CardTitle>
                        <BoxReveal boxColor={"#e0aaff"} duration={0.5}>
                            <CardDescription style={{ width: "100%", whiteSpace: "normal" }}>
                                {/*<WordPullUp className="flex text-sm text-muted-foreground w-max"
                                words="Change your password here. After saving, you'll be logged out."
                            />*/}
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quia harum ullam voluptates tempore omnis similique magnam nesciunt.
                            </CardDescription>
                        </BoxReveal>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <BoxReveal boxColor={"#c77dff"} duration={0.5}>
                            <ul>
                            <li className="space-y-3"><Label>- Fonctionnalité 1</Label></li>
                            <li className="space-y-3"><Label>- Fonctionnalité 2</Label></li>
                            <li className="space-y-3"><Label>- Fonctionnalité 3</Label></li>
                            <li className="space-y-3"><Label>- Fonctionnalité 4</Label></li>
                            <li className="space-y-3"><Label>- Fonctionnalité 5</Label></li>
                            <li className="space-y-3"><Label>- Fonctionnalité 6</Label></li>
                            </ul>
                        </BoxReveal>
                    </CardContent>
                    <CardFooter>
                        <Button style={{ backgroundColor: '#9d4edd' }}>Acheter</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs >
    )
}

function AnimatedGradientTextDemo() {
    return (
        <div className="">
            <AnimatedGradientText>
                🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
                <span className={cn(`inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`)}>
                    Formule actuelle
                </span>
            </AnimatedGradientText>
        </div>
    );
}