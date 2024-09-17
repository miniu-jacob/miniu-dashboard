import { UserButton } from '@clerk/nextjs';
export default function Home() {
    return (
        <div className=''>
            <UserButton afterSignOutUrl='/' />
            <p className='text-3xl font-medium text-sky-700'>Protected Page</p>
        </div>
    );
}
