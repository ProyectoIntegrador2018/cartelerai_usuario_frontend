import React from 'react'
import { connect } from 'react-redux'
import { thunks } from 'Logic/actions/thunks'
import EventList from 'Presentational/events/List'
import Filters from 'Containers/events/Filters'
import { EventActions, Status } from 'Config/constants'
import { isEmpty } from 'Config/helper'
var Spinner = require('react-spinkit');

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventsAll: [],
            events: [],
        }
        this.tagsList = ['code', 'hack', 'business'];
        this.searchQuery = this.searchQuery.bind(this);
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            events: newProps.event.all,
            eventsAll: newProps.event.all
        });
    }

    componentWillMount() {
        this.props.loadEvents();
    }

    searchQuery(query) {
        if (query.length == 0) {
            this.cleanQuery();
        } else if (query.startsWith("term:")) {
            let term_query = query.substring(5, query.length);
            this.filterByTerm(term_query);
        } else if (query.startsWith("tags:")) {
            let tags_query = query.substring(5, query.length);
            this.filterByTags(tags_query);
        } else if (query.startsWith("category:")) {
            let category_query = query.substring(9, query.length);
            this.filterByCategory(category_query);
        }
    }

    cleanQuery() {
        let curr_events = this.state.eventsAll;
        let evn_len = curr_events.length;
        let filtered_events = [];

        for (let i = 0; i < evn_len; i++) {
            console.log("here")
            let curr_event = curr_events[i];
            filtered_events.push(curr_event);
        }

        this.setState({events: filtered_events});
    }

    filterByCategory(query) {
        let curr_events = this.state.eventsAll;
        let evn_len = curr_events.length;
        let filtered_events = [];

        for (let i = 0; i < evn_len; i++) {
            let curr_event = curr_events[i];
            if (curr_event.category == query) {
                filtered_events.push(curr_event);
            }
        }

        this.setState({events: filtered_events});
    }

    filterByTerm(query) {
        let term = query.toLowerCase();
        let curr_events = this.state.eventsAll;
        let evn_len = curr_events.length;
        let filtered_events = [];

        for (let i = 0; i < evn_len; i++) {
            let evn_title = curr_events[i].name;
            evn_title = evn_title.toLowerCase();

            if (evn_title.includes(term)) {
                filtered_events.push(curr_events[i]);
            }
        }
        
        this.setState({events: filtered_events});
    }

    filterByTags(query) {
        let tags_query = query.split('#');
        let curr_events = this.state.eventsAll;
        let evn_len = curr_events.length;
        let filtered_events = [];

        for (let i = 0; i < evn_len; i++) {
            let curr_tags= curr_events[i].tagNames;
            let addEvent = true;

            for (let j = 0; j < tags_query.length; j++) {
                if (curr_tags.indexOf(tags_query[j]) == -1){
                    addEvent = false;
                    break;
                }
            }
            
            if (addEvent) {
                filtered_events.push(curr_events[i])
            }
        }

        this.setState({events: filtered_events});
    }

    render() {
        return (
            <div>
                <Filters eventsAll={this.state.eventsAll} searchQuery={this.searchQuery} />
                <div className={'event-container ' + (this.props.upcoming ? "upcoming" : "all")}>
                    <EventList
                        events={this.state.events}
                        hide
                        reducer={{
                            status: this.props.event.status,
                            action: this.props.event.action,
                            error: this.props.event.error
                        }}
                        action={EventActions.All} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        event: state.event
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadEvents: () => {
            dispatch(thunks.event.all())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
