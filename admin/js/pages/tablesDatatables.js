/*
 *  Document   : tablesDatatables.js
 *  Author     : pixelcave
 *  Description: Custom javascript code used in Tables Datatables page
 */

var TablesDatatables = function() {

    return {
        init: function() {
            /* Initialize Bootstrap Datatables Integration */
            App.datatables();

            /* Initialize Datatables */
            $('#example-datatable').dataTable({
                columnDefs: [ { orderable: false, targets: [ 1, 4 ] } ],
                pageLength: 5,
                lengthMenu: [[5, 10, 20, 30, -1], [5, 10, 20, 30, 'All']]
            });
            /* Initialize Datatables */
            $('#example-datatablee').dataTable({
                columnDefs: [ { orderable: false, targets: [ 1, 4 ] } ],
                pageLength: 5,
                lengthMenu: [[5, 10, 20, 30, -1], [5, 10, 20, 30, 'All']]
            });

            /* Add placeholder attribute to the search input */
            $('.dataTables_filter input').attr('placeholder', 'Search');
        }
    };
}();