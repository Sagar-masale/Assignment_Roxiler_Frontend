import { useEffect, useState } from "react"
import API from "../../api/axios"
import UserLayout from "../../layouts/UserLayout"
import StoreCard from "../../components/store/StoreCard"
import SearchBar from "../../components/common/SearchBar"
import toast from "react-hot-toast"

const Stores = () => {
  const [stores, setStores] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetchStores()
  }, [])

  const fetchStores = async () => {
    try {
      const { data } = await API.get("/stores/all")
      setStores(data)
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  const filteredStores = stores.filter(
    (store) =>
      store.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      store.address
        .toLowerCase()
        .includes(search.toLowerCase())
  )

  return (
    <UserLayout>
      <div className="space-y-8">
        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredStores.map((store) => (
            <StoreCard
              key={store._id}
              store={store}
              fetchStores={fetchStores}
            />
          ))}
        </div>
      </div>
    </UserLayout>
  )
}

export default Stores