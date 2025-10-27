// hooks/useLocations.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { locationService } from '@/lib/services/locationService'

export const useLocations = () => {
  const queryClient = useQueryClient()

  const locationsQuery = useQuery({
    queryKey: ['locations'],
    queryFn: locationService.getAll,
  })

  const getLocationById = (id: string) =>
    useQuery({
      queryKey: ['location', id],
      queryFn: () => locationService.getById(id),
      enabled: !!id, // only fetch if id exists
    })

  const createLocation = useMutation({
    mutationFn: locationService.create,
    onSuccess: () => queryClient.invalidateQueries(['locations']),
  })

  const updateLocation = useMutation({
    mutationFn: ({ id, data }: any) => locationService.update(id, data),
    onSuccess: () => queryClient.invalidateQueries(['locations']),
  })

  const deleteLocation = useMutation({
    mutationFn: locationService.remove,
    onSuccess: () => queryClient.invalidateQueries(['locations']),
  })

  return {
    locationsQuery,
    createLocation,
    updateLocation,
    deleteLocation,
    getLocationById,
  }
}
