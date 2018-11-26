import React from 'react'
import { TagSection, SearchBar, CategorySection } from 'Presentational/elements'
import { runInThisContext } from 'vm';

class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTags: [],
            searchSentence: '',
            tagsList: [],
            categoriesList: [],
        }
        this.selectTag = this.selectTag.bind(this);
        this.removeTag = this.removeTag.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
        this.search = this.search.bind(this);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.eventsAll) {
            let events = newProps.eventsAll;
            let tags = [];
            let categories = ['Todas'];

            for (let i = 0; i < events.length; i++) {
                if (categories.indexOf(events[i].category) == -1){
                    categories.push(events[i].category)
                }

                for (let j = 0; j < events[i].tagNames.length; j++) {
                    if (tags.indexOf(events[i].tagNames[j]) == -1){
                        tags.push(events[i].tagNames[j])
                    }
                }
            }

            this.setState({
                tagsList: tags,
                categoriesList: categories,
            })
        }
    }

    search(category) {
        let selectedTags = this.state.selectedTags;
        let searchSentence = this.state.searchSentence;
        let searchQuery = '';

        if (selectedTags.length > 0) {
            searchQuery += "tags:"
            let i = 0
            for (i; i < selectedTags.length; i++) {
                searchQuery += selectedTags[i];
                searchQuery += '#';
            }
            searchQuery = searchQuery.substring(0, searchQuery.length - 1);
        } else if (searchSentence.length > 0) {
            searchQuery += 'term:';
            searchQuery += searchSentence;
        } else if (category && category != "Todas") {
            searchQuery += 'category:';
            searchQuery += category;
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

    render() {
        return (
            <div>
                <SearchBar
                    searchSentence = {this.state.searchSentence}
                    selectedTags = {this.state.selectedTags}
                    removeTag = {this.removeTag}
                    updateSearch = {this.updateSearch}
                    search = {this.search} />
                <h4>Categorias:</h4>
                <CategorySection
                    categoriesList = {this.state.categoriesList}
                    selectCategory = {this.search} />
                <h4>Tags:</h4>
                <TagSection
                    tagsList = {this.state.tagsList}
                    selectTag = {this.selectTag} />
            </div>
        )
    }
}

export default Filters;
