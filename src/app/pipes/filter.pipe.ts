import { Pipe, PipeTransform } from '@angular/core'
import { Movie } from '../model/movies'

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: Movie[], searchText: string): any[] {
    // return empty array if array is falsy
    if (!items) {
      return []
    }

    // return the original array if search text is empty
    if (!searchText) {
      return items
    }

    // convert the searchText to lower case
    searchText = searchText.toLowerCase()

    // retrun the filtered array
    return items.filter((item) => {
      return item.title.toLowerCase().includes(searchText)
    })
  }
}
