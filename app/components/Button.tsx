'use Client'

import clsx from "clsx"
interface ButtonProps{
    type ?:'button'|'submit'|'reset'|undefined;
    fullWidth?:boolean;
    children?:React.ReactNode; 
    // children?: React.ReactNode;: This line adds the children prop to the ButtonProps interface. The React.ReactNode type is used to indicate that the children prop can accept any valid React nodes, such as strings, components, JSX elements, or arrays of these.Inside the Button component:The children prop is used inside the <button> element. When you render the Button component and provide content within it, that content will be placed where the {children} placeholder is in the <button> element.For example, when using the Button component:
    onClick?:()=>void;
    secondary?:boolean;
    danger?:boolean;
    disabled?:boolean;
}
const Button: React.FC<ButtonProps> = ({
    type,
    fullWidth,
    children,
    onClick,
    secondary,
    danger,
    disabled
}) =>{
    return(
        <button
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={clsx(`
        flex
        justify-center
        rounded-md
        px-3
        py-2
        text-sm
        font-semibold
        focus-visible:outline
        focus-visible:outline-2
        focus-visible:outline-offset-2`,
        disabled && 'opacity-50  cursor-default',
        fullWidth && "w-full",
        secondary ? 'text-gray-900': 'text-white',
        danger && "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600",
        !secondary && !danger && "bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600")}>
        {children}
        {/* fullWidth && 'w-full': If the fullWidth prop is truthy, it adds the class 'w-full', which makes the button take up the full width of its container.

secondary ? 'text-gray-900' : 'text-white': If the secondary prop is truthy, it adds the class 'text-gray-900', which sets the text color to gray. Otherwise, it sets the text color to white.

danger && 'bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600': If the danger prop is truthy, it adds a set of classes that define a background color change on hover and set the focus outline color for a dangerous action.

!secondary && !danger && 'bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600': If neither secondary nor danger is truthy, it adds a set of classes that define a background color change on hover and set the focus outline color for a regular action. */}
        </button>

    )
}
export default Button