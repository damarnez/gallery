import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './pagination.css';
const range = (start, count) =>  {
    return Array.apply(0, Array(count)).map(function (element, index) { 
          return index + start;  
    },[]);
}
 
class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = { pager: {} };
    }
 
    componentDidMount() {
        this.setPage(this.props.page);
    }
    componentDidUpdate(prevProps, prevState){

        if(prevProps.totalItems !== this.props.totalItems || prevProps.page !== this.props.page) {
            console.log(' PREPROPS : ',prevProps.page, ' NEWPROPS: ',this.props.page);
            pager = this.getPager(this.props.totalItems, this.props.page, this.props.pageSize);
            this.setState({ pager: pager });
        }
         
    }
    setPage(page = 1) {
        
        let pager = this.state.pager;
 
        if (page < 1 || page > pager.totalPages) {
            return;
        }
        // get new pager object for specified page
        pager = this.getPager(this.props.totalItems, page, this.props.pageSize);
        this.setState({ pager: pager });
        this.props.onChangePage(page);
    }
 
    getPager(totalItems, currentPage = 1, pageSize = 7) {
 
        const totalPages = Math.ceil(totalItems / pageSize);
        
        let startPage, endPage;
        // less than 10 total pages so show all
        if (totalPages <= 7) {
            startPage = 1;
            endPage = totalPages;
        } else {
            // more than 7 total pages so calculate start and end pages
            if (currentPage <= 4) {
                startPage = 1;
                endPage = 7;
            } else if (currentPage + 3 >= totalPages) {
                startPage = totalPages - 7;
                endPage = totalPages;
            } else {
                startPage = currentPage - 3;
                endPage = currentPage + 3;
            }
        }
        console.log('-currentPage: ',currentPage,' -- totalPages : ',totalPages, ' --- startPage:',startPage,' --- endPage', endPage, '--- total',totalItems);
        // calculate start and end item indexes
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        
        const pages = endPage < startPage ? [] : range(startPage, (endPage - startPage) + 1) ;
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
 
    render() {
        const {pager} = this.state || {};
        if(!pager || this.props.totalItems === 0 || !pager.pages || pager.pages.length === 0) return (<div> NO MORE DATA </div>);
 
        return (
            <div className="center"><ul className="pagination">
                <li className={pager.currentPage === 1 ? 'disabled' : ''}>
                    <a onClick={() => this.setPage(pager.currentPage - 1)}>{"<<"}</a>
                </li>
                {pager.pages.map((page, index) =>
                    <li key={index} className={pager.currentPage === page ? 'active' : ''}>
                        <a onClick={() => this.setPage(page)}>{page}</a>
                    </li>
                )}
                <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                    <a onClick={() => this.setPage(pager.currentPage + 1)}>{">>"}</a>
                </li>
            </ul></div>
        );
    }
}


Pagination.propTypes = {
    onChangePage: PropTypes.func.isRequired,
    totalItems : PropTypes.number.isRequired,
    pageSize : PropTypes.number.isRequired,
    page : PropTypes.number.isRequired
};
export default Pagination;