import Image from "next/image"
function SignIn() {
  return (
    <div className=" w-full flex h-screen justify-center">
        <Image src={"/signin.png"} alt="sign in " height={3000} width={500} />
    </div>
  )
}

export default SignIn 