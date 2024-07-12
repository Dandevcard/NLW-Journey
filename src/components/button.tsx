import { ComponentProps, ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants"


//variavel que contro as variantes no tailwind, para controlar as cores diferentes dos botões
const buttonVariants = tv({
  //base: é tudo que vai ser padrão nos botões, que independente de qual seja, vai usar isso como base
  base: 'rounded-lg px-5  font-medium flex justify-center items-center gap-2',

  //variante vai cuidar de qual variante queremos usar
  variants: {
    //nome da diferença
    variant: {
      //aq setamos cada uma das variantes, no caso as cores
      primary: "bg-lime-300 text-lime-950 hover:bg-lime-400",
      secondary: 'bg-zinc-800 text-zinc-200  hover:bg-zinc-700',
      kkk: 'bg-red-800 text-black-800'
    },

    size: {
      default: 'py-2',
      full: 'w-full h-11'
    }
  },
    

  //variante que pega caso n ache a variante de cima
  defaultVariants: {
    variant: 'kkk',
    size: 'default'
  }
})

//passando diferentes tipos de propriedaddes para varios botões diferentes
interface ButtonProps extends ComponentProps<'button'>,VariantProps<typeof buttonVariants> {
  children: ReactNode
}




export function Button({ children,variant,size, ...props }: ButtonProps) {
  return (
    <button {...props} className={buttonVariants({variant, size})}>

      {/* eu coloco aq dentro dele o filho  */}
      {children}
    </button>
  )
}









