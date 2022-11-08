import Layout from "../../components/Layout";
import { useRouter } from 'next/router';
import styles from '../../styles/User.module.css';

interface UserProps {
    dataUsers: Array<any>;
}
export default function Users(props: UserProps) {
    const { dataUsers } = props;
    const router = useRouter()

    return (
        <Layout pageTitle="User Page">
            {
                dataUsers.map((user) => (
                    <div key={user.id} onClick={() => router.push(`users/${user.id}`)} className={styles.card}>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </div>
                ))
            }

        </Layout>
    )
}

// data fetching (dimana tempat mengambil data)
//tipe data fetching (getStaticProps, getServerSideProps, getStaticPath)

// contoh getStaticProps, fungsinya dia sudah memeiliki data yg sesuai API, dan sudah disiapkan terlebih dahulu  sebelum page dipanggil, kelemahan ketika data dinamis kurang cocok menggunakan getStaticProps
//ketika kita menggunakan getStaticProps halaman yg melakukan fetching suadh  di bundle terlebih dahulu sebelum page ny muncul
export async function getStaticProps() {
    // di network pemanggilan API tidak terlihat dikarenakan terjadi disisi server jadi sebelum javascriptnya muncul kedalam browser dia sudah panggil API terlebih dahulu baru di provide datanya
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataUsers = await res.json();
    return {
        props: {
            dataUsers: dataUsers,
        }
    }
}

//contoh getStaticPath 