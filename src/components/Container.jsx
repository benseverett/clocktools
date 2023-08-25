import clsx from 'clsx'

export function Container({ as: Component = 'div', className, chilren }) {
    return (
        <Component className={clsx("mx-auto max-w-7xl max-h-none", className)}>
            <div className="mx-auto max-w-4xl lg:max-w-none">{chilren}</div>
        </Component>
    )
}