import Link from "next/link";
import Image from "next/image";

const Nav = () => {
    return (
        <nav className='flex-between w-full mb-16 pt-3'>
            <Link href='/' className='flex gap-2 flex-center'>
                <Image
                    src='/assets/logo.png'
                    alt='logo'
                    width={35}
                    height={35}
                    className='object-contain'
                />
                <p className='logo_text'>Food Record</p>
            </Link>
        </nav>
    )
};

export default Nav;
