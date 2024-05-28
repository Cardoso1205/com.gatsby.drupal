export interface ButtonProps {
children: string
to: string
target?: string
variant?: 'primary' | 'secondary'
}

interface link {
    label: string
    to: string
}

export interface NavbarProps {
    logo: string
    links: link[]
    ctas: ButtonProps[]
}