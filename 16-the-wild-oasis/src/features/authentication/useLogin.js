import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

// Login situations must be a mutation
export function useLogin() {
    const navigate = useNavigate();
    const { mutate: login, isLoading } = useMutation({
        mutationFn: ({ email, password }) => loginApi({ email, password }),
        onSuccess: user => {
            console.log(user);
            toast.success("Successfully logged in");
            navigate("/dashboard");
        },
        onError: err => {
            console.log(err.message);
            toast.error(err.message);
        },
    });
    return { login, isLoading };
}
