import React from 'react'
import { TagSection, SearchBar} from 'Presentational/elements'
import { runInThisContext } from 'vm';

class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTags: [],
            searchSentence: '',
            tagsList: [],
           // costList[],
           // campus: [],
            //categoryList[],
            //selectedEvents[],
        }
        this.selectTag = this.selectTag.bind(this);
        //his.selectCampus = this.selectcampus.bind(this);
       // this.selectCost = this.selectCost.bind(this);
        //this.selectCategory = this.selectCategory.bind(this);
        this.removeTag = this.removeTag.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
        this.search = this.search.bind(this);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.eventsAll) {
            let events = newProps.eventsAll;
            let tags = []
           // let campusO =[]
           // let costO =[]
            //let categoryO =[]

            for (let i = 0; i < events.length; i++) {
                if (tags.indexOf(events[i].category) == -1){
                    tags.push(events[i].category)
                }
            }

           /* for (let i = 0; i < events.length; i++) {
                if (campusO.indexOf(events[i].campus) == -1){
                    campusO.push(events[i].campus)
                }
            }

          /*  for (let i = 0; i < events.length; i++) {
                if (costO.indexOf(events[i].cost) == -1){
                    costO.push(events[i].cost)
                }
            }

            for (let i = 0; i < events.length; i++) {
                if (categoryO.indexOf(events[i].category) == -1){
                    categoryO.push(events[i].category)
                }
            }*/

            this.setState({
                tagsList: tags,
                //campus: campusO
                //costList: costO,
               // categoryList: categoryO
            })
        }
    }

    search() {
        let selectedTags = this.state.selectedTags;
        let searchSentence = this.state.searchSentence;
        let searchQuery = '';

        if (selectedTags.length > 0) {
            searchQuery += "tags:"
            let i = 0
            for (i; i < selectedTags.length; i++) {
                searchQuery += selectedTags[i];
                searchQuery += '#'
            }
            searchQuery = searchQuery.substring(0, searchQuery.length - 1);
        } else if (searchSentence.length > 0) {
            searchQuery += 'term:';
            searchQuery += searchSentence
        }


        this.props.searchQuery(searchQuery);
    }

    updateSearch(event) {
        this.setState({searchSentence: event.target.value})
    }

    selectTag(tag) {
        let selectedTags = this.state.selectedTags;
        if (selectedTags.indexOf(tag) == -1) {
            selectedTags.push(tag)
            this.setState({ selectedTags: selectedTags });
        }
    }

    removeTag(tag) {
        let selectedTags = this.state.selectedTags;
        selectedTags.splice(selectedTags.indexOf(tag), 1);
        this.setState({ selectedTags: selectedTags });
    }

    /*selectEvent_campus(){
        this.setState({selectCampus: event.target.value});// re escribir el valo de campus id, capturando el valor del filtro
         //console.log(this.refs.eventSelector_campus.value)
         this.props.selectedCampus(selectCampus);

    }*/
 //============================================Cost====================
    /*selectEvent_cost(){
        this.setState({selectCost: event.target.value});
        // console.log(this.refs.eventSelector_cost.value)
        this.props.selectCost(selectCost);

    }

 //============================================Categoria====================
    selectEvent_category(){
        this.setState({selectCategory: event.target.value});
         //console.log(this.refs.eventSelector_category.value)
         this.props.selectCategory(selectCategory)
    }*/


    render() {
        return (
            <div>
                    <SearchBar
                        searchSentence = {this.state.searchSentence}
                        selectedTags = {this.state.selectedTags}
                        removeTag = {this.removeTag}
                        updateSearch = {this.updateSearch}
                        search = {this.search} /> 
                    //<Dropdown data={campusO} />
                    <TagSection
                        tagsList = {this.state.tagsList}
                        selectTag = {this.selectTag} />

            </div>
        )
    }
}

export default Filters;
