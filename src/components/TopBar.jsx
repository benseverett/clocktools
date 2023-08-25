

export function TopBar({
    title,
    children
}) {
    return (
        <div className='flex'>
            <h2>
                {title}
            </h2>
            <p>{children}</p>

        </div>
    )
}