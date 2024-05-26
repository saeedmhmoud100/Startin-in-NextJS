export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <div>
            <h4>Text from product layout</h4>
            {children}
        </div>
    )
}