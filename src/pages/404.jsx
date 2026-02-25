import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-2">Oops!</h1>
            <p className="font-medium text-slate-500 mb-8">Sorry, an unexpected error has occurred.</p>
            <p className="font-medium text-slate-500">{error.statusText || error.message}</p>
        </div>
    )
}

export default ErrorPage