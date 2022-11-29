import { useRouter } from 'next/router'

const useQueryUrl = () => {
  const router = useRouter()
  const { query } = router
  let page = Number(query.page) >= 1 ? Number(query.page) : 1
  let page_size = Number(query.page_size) >= 10 ? Number(query.page_size) : 10
  let search = query.search || ''

  return {
    router,
    page,
    page_size,
    search,
  }
}

export default useQueryUrl
