

"use client";
import { ArrowUpRight, Menu, Search, ShoppingBag, ShoppingBasket } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";


const categories = [
  {
    title: "Nikes",
    image: "/Air-force.png",
    href: "/Products",
  },
  {
    title: "New Balance",
    image: "New-balance.png",
    href: "/Products",
  },
  {
    title: "Converse",
    image: "Converse.png",
    href: "Products",
  },
  {
    title: "Jordans",
    image: "jordan.png",
    href: "/Products",
  },
];

const navigation = [
  { name: "Home", href: "/Products" },
  { name: "Products", href: "/Products" },
  { name: "Featured", href: "/Products" },
  { name: "About", href: "/Products" },
];

export function CommerceHero() {
  return (
    <div className="w-full relative container  px-2 mx-auto max-w-7xl min-h-screen">

        <div className="mt-6 rounded-2xl relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage :`url(https://i.pinimg.com/1200x/d3/f9/b2/d3f9b2783fb0ccd34969edc0e3f3e4e0.jpg)`}} >
{/* 
        <div className="absolute inset-0 backdrop-blur-[1px] bg-black-50/18  rounded-2xl"></div> */}
        
            <header className="flex items-center">
            
            <div className="w-full md:w-2/3 lg:w-1/2 bg-background/95 backdrop-blur-sm p-4 rounded-br-2xl flex items-center gap-2">
              <a href="#" className="text-xl font-semibold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
               
               <div className="flex justify-center gap-2 items-center">
                <span className="text-red-500 text-2xl font-medium">NenKICKS</span>
                <ShoppingBag className="text-red-500 "/>
                </div>
              </a>

              <nav className="hidden lg:flex items-center justify-between w-full">
                {navigation.map((item) => (
                  <Button 
                    key={item.name} 
                    variant="link" 
                    className="cursor-pointer relative group hover:text-primary transition-colors"
                    
                  >
                    {item.name}
                  </Button>
                ))}
                <Button variant="ghost" size="icon" className="cursor-pointer relative group hover:text-primary transition-colors">
                  <Search className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="cursor-pointer relative group hover:text-primary transition-colors">
                  <ShoppingBasket className="w-5 h-5" />
                </Button>
              </nav>

              <Sheet>
                <SheetTrigger asChild className="lg:hidden ml-auto">
                  <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="left"
                  className="w-[300px] sm:w-[400px] p-0 bg-background/95 backdrop-blur-md border-r border-border/50"
                >
                  <SheetHeader className="p-6 text-left border-b border-border/50">
                    <SheetTitle className="flex items-center justify-between">
                      <a href="#" className="text-xl font-semibold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                        <div className="flex justify-center items-center gap-1">
                         <span className="font-medium text-red-500">Nenkicks</span>
                         <ShoppingBag className="text-red-500"/>
                        </div>
                      </a>
                    </SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col p-6 space-y-1">
                    {navigation.map((item) => (
                      <Button 
                        key={item.name}
                        variant="ghost" 
                        className="justify-start px-2 h-12 text-base font-medium hover:bg-accent/50 hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Button>
                    ))}
                  </nav>
                  <Separator className="mx-6" />
                  <div className="p-6 flex flex-col gap-4">
                    <Button variant="outline" className="justify-start gap-2 h-12 hover:bg-accent/50 transition-colors">
                      <Search className="w-4 h-4" />
                      Search
                    </Button>
                    <Button variant="outline" className="justify-start gap-2 h-12 hover:bg-accent/50 transition-colors relative">
                      <ShoppingBasket className="w-4 h-4" />
                      Cart
                      <span className="absolute right-3 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                        3
                      </span>
                    </Button>
                  </div>
                  <Separator className="mx-6" />
                  <div className="p-6">
                    <Button className="w-full h-12 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-lg hover:shadow-xl">
                      Log In
                      <ArrowUpRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            <div className="hidden md:flex w-1/2 justify-end items-center pr-4 gap-4 ml-auto">
              <Button
                variant="secondary"
                className="cursor-pointer bg-primary-foreground p-0 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <span className="pl-4 py-2 text-sm font-medium">Login</span>
                <div className="rounded-full flex items-center justify-center m-auto bg-background w-10 h-10 ml-2 group-hover:scale-110 transition-transform duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </Button>
            </div>
            
          </header>
          

          <motion.section
            className="w-full px-4 py-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="mx-auto text-center relative z-10">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                  Walk different.
                </span>
                <br />
                <span className="text-foreground">
                  Find your fit.
                </span>
              </motion.h1>
              <motion.p
                className="text-white font-medium md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                We are your destination for exclusive kicks and streetwear essentials. 
                Dont just follow the culture—define it, one step at a time
              </motion.p>
            </div>
          </motion.section>
        </div>

        <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mt-12">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              className="group relative bg-muted/50 backdrop-blur-sm rounded-3xl p-4 sm:p-6 min-h-[250px] sm:min-h-[300px] w-full overflow-hidden transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            >
              <a href={category.href} className="absolute inset-0 z-20">
                <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-[clamp(1.5rem,4vw,2.5rem)] font-bold relative z-10 text-primary my-2 sm:my-4 group-hover:text-primary/90 transition-colors duration-300">
                  {category.title}
                </h2>
                <div className=" absolute inset-0 flex items-center justify-center p-4">
                  <img 
                
                    src={category.image}
                    alt={category.title}
                    className="w-full max-w-[min(40vw,200px)] sm:max-w-[min(30vw,180px)] md:max-w-[min(25vw,160px)] lg:max-w-[min(20vw,140px)] h-auto object-cover opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500"
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-background/95 backdrop-blur-sm rounded-tl-xl flex items-center justify-center z-10 border-l border-t border-border/50">
                  <div className="absolute bottom-2 right-2 md:bottom-3 md:right-3 w-10 h-10 md:w-12 md:h-12 bg-secondary rounded-full flex items-center justify-center group-hover:bg-red-400 group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
    </div>
  );
}
