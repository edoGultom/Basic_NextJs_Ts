import { useRouter } from "next/router";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

interface UserDetailProps {
  user: User
}

export default function UserDetail(props: UserDetailProps) {
  const router = useRouter();
  // {id} didapat dari path filenya ([id].tsx), jadi setiap kali akses users/xxx maka akan ditampilkan xxx
  const { user } = props;
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.website}</p>
    </div>
  )
}
//getStaticPaths adalah list dari user2, sehhingga fungsi dari staticPath ini melakukan generate hal2 static html sejumlah user yg dimiliki
//kelebihan: semuannya akan mengenerate halaman sesuai dengan yang diperlukan sebelum dipanggil oleh user
export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();

  const paths = dataUsers.map((user: User) => ({
    params: {
      id: `${user.id}`
    }
  }));

  return {
    paths,
    fallback: false// jika false kita ada url yang tidak ditemukan maka dia akan dilarikan ke 404 page, jika true maka kita akan selalu menunggu sirender sampai selesai jika ada url yang tidak ditemukan
  };
}


interface GetStaticProps {
  params: {
    id: string;
  }
}
export async function getStaticProps(context: GetStaticProps) {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();

  return {
    props: {
      user
    }
  }

}