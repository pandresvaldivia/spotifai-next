import { SVGAttributes } from 'react'

export type IconProps = SVGAttributes<SVGSVGElement>

export type SVGIcon = ({ ...rest }: IconProps) => JSX.Element
