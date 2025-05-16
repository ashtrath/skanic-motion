export const getServerSideURL = () => {
    const url = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000"

    return url
}

export const getClientSideURL = () => {
    return process.env.NEXT_PUBLIC_SERVER_URL || ""
}
