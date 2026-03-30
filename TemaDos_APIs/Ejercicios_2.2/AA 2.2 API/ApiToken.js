import axios from "axios";

const login = async () => {
    try {

        const token = "4b3c53cbba2e7adceb4b59aab7a4075e117cab9627e2c0c9cce0ea58b59bf57e";
        console.log("Token:", token);

        const datos = await axios.get(
            "https://gorest.co.in/public/v2/users",
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            }
        );

        console.log("Datos protegidos:", datos.data);
    } catch (error) {
        console.error("Error", error.response.data);
    }
}; login();