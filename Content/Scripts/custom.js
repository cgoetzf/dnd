
    /*
    Corrige problema de cache com Ajax em novas requisições
    */
    $.ajaxSetup({
        cache: false
    });

    /*
    Corrige problema de validação com o TinyMCE na hora de fazer o submit
    */
    $('form button[type=submit]').click(function () {
        tinyMCE.triggerSave();
    });

    /**/



    $('.btn-category').click(function () {
        var idCategory = $(this).data("id");
        loadKbTable(idCategory);
    });
    /*
    function loadKbTable(idCategory) {
    
        var table = $('#searchTable').dataTable({
            "responsive": false,
            "bJQueryUI": false,
            "bPaginate": true,
            destroy: true,
            searching: true,
            "sPaginationType": "simple_numbers",
            "iDisplayLength": 10,
            "aaSorting": [[0, 'desc']],
            "bProcessing": true,
            "bLengthChange": false,
            "sAjaxDataProp": "",
            "sAjaxSource": "/Kb/GetKbListByCategory",
            "fnServerData": function (sSource, aoData, fnCallback) {
                aoData.push({ "name": "idCategory", "value": idCategory });
                $.ajax({
                    "dataType": 'json',
                    "url": sSource,
                    "data": aoData,
                    "success": fnCallback
                });
            },
            "aoColumns": [
                { "data": "Data01" },
                { "data": "Data02" },
                { "data": "Data03" },
                { "data": "Data04" },
                {
                    "mRender": function (data, type, row, meta) { return "<h4 class='text-left'>" + row.Data05 + "</h4><h5 class='text-justify'>" + row.Data06 + "</h5>"; }
                }
    
            ]
        });
        $('#searchTable tbody').on('click', 'tr', function () {
            var idObj = $('td', this).eq(0).text();
            window.location = '/Kb/Viewer/' + idObj;
        });
        $('#searchTable tbody').hover(function () {
            $('tr', this).css('cursor', 'pointer');
        });
    }*/
    function loadKbSearchTable(txtValue) {

        var table = $('#searchTable').dataTable({
            "responsive": false,
            "bJQueryUI": false,
            "bPaginate": true,
            destroy: true,
            searching: true,
            "sPaginationType": "simple_numbers",
            "iDisplayLength": 10,
            "aaSorting": [[0, 'desc']],
            "bProcessing": true,
            "bLengthChange": false,
            "sAjaxDataProp": "",
            "sAjaxSource": "/Kb/GetKbListByFilter",
            "fnServerData": function (sSource, aoData, fnCallback) {
                aoData.push({ "name": "txtValue", "value": txtValue });
                $.ajax({
                    "dataType": 'json',
                    "url": sSource,
                    "data": aoData,
                    "success": fnCallback
                });
            },
            "aoColumns": [
                { "data": "Data01" },
                { "data": "Data02" },
                { "data": "Data03" },
                { "data": "Data04" },
                {
                    "mRender": function (data, type, row, meta) { return "<h4 class='text-left'>" + row.Data05 + "</h4><h5 class='text-justify'>" + row.Data06 + "</h5>"; }
                }

            ]
        });
        $('#searchTable tbody').on('click', 'tr', function () {
            var idObj = $('td', this).eq(0).text();
            window.location = '/Kb/Viewer/' + idObj;
        });
        $('#searchTable tbody').hover(function () {
            $('tr', this).css('cursor', 'pointer');
        });
    }
    function loadDeviceSearchTable(txtValue) {

        var table = $('#searchTable').dataTable({
            "responsive": false,
            "bJQueryUI": false,
            "bPaginate": true,
            destroy: true,
            searching: true,
            "sPaginationType": "simple_numbers",
            "iDisplayLength": 10,
            "aaSorting": [[0, 'desc']],
            "bProcessing": true,
            "bLengthChange": false,
            "sAjaxDataProp": "",
            "sAjaxSource": "/Inventory/GetDeviceList",
            "fnServerData": function (sSource, aoData, fnCallback) {
                aoData.push({ "name": "txtValue", "value": txtValue });
                $.ajax({
                    "dataType": 'json',
                    "url": sSource,
                    "data": aoData,
                    "success": fnCallback
                });
            },
            "aoColumns": [
                { "data": "Data01" },
                { "data": "Data02" },
                { "data": "Data03" },
                { "data": "Data04" },
                { "data": "Data05" },
                { "data": "Data06" }


            ]
        });
        $('#searchTable tbody').on('click', 'tr', function () {
            var idObj = $('td', this).eq(0).text();
            window.location = '/Inventory/Device/' + idObj;
        });
        $('#searchTable tbody').hover(function () {
            $('tr', this).css('cursor', 'pointer');
        });
    }
    function loadFaqSearchTable(txtValue) {

        var table = $('#searchTable').dataTable({
            "responsive": false,
            "bJQueryUI": false,
            "bPaginate": true,
            destroy: true,
            searching: true,
            "sPaginationType": "simple_numbers",
            "iDisplayLength": 10,
            "aaSorting": [[0, 'desc']],
            "bProcessing": true,
            "bLengthChange": false,
            "sAjaxDataProp": "",
            "sAjaxSource": "/Faq/GetFaqListByFilter",
            "fnServerData": function (sSource, aoData, fnCallback) {
                aoData.push({ "name": "txtValue", "value": txtValue });
                $.ajax({
                    "dataType": 'json',
                    "url": sSource,
                    "data": aoData,
                    "success": fnCallback
                });
            },
            "aoColumns": [
                { "data": "Data01" },
                { "data": "Data02" },
                { "data": "Data03" },
                { "data": "Data04" },
                {
                    "mRender": function (data, type, row, meta) { return "<h4 class='text-left'>" + row.Data05 + "</h4><h5 class='text-justify'>" + row.Data06 + "</h5>"; }
                }

            ]
        });
        $('#searchTable tbody').on('click', 'tr', function () {
            var idObj = $('td', this).eq(0).text();
            window.location = '/Faq/Viewer/' + idObj;
        });
        $('#searchTable tbody').hover(function () {
            $('tr', this).css('cursor', 'pointer');
        });
    }
    function loadNoteTable() {

        var table = $('#searchTable').dataTable({
            "responsive": false,
            "bJQueryUI": false,
            "bPaginate": true,
            destroy: true,
            searching: true,
            "sPaginationType": "simple_numbers",
            "iDisplayLength": 10,
            "aaSorting": [[0, 'desc']],
            "bProcessing": true,
            "bLengthChange": false,
            "sAjaxDataProp": "",
            "sAjaxSource": "/Note/GetNoteList",
            "fnServerData": function (sSource, aoData, fnCallback) {

                $.ajax({
                    "dataType": 'json',
                    "url": sSource,
                    "data": aoData,
                    "success": fnCallback
                });
            },
            "aoColumns": [
                { "data": "Data01" },
                { "data": "Data02" },
                { "data": "Data03" },
                {
                    "mRender": function (data, type, row, meta) { return "<h4 class='text-left'>" + row.Data04 + "</h4><p class='text-justify'>" + row.Data05 + "</p>"; }
                }

            ]
        });
        $('#searchTable tbody').on('click', 'tr', function () {
            var idObj = $('td', this).eq(0).text();
            window.location = '/Note/Viewer/' + idObj;
        });
        $('#searchTable tbody').hover(function () {
            $('tr', this).css('cursor', 'pointer');
        });
    }

    function loadAccessTable() {

        var table = $('#searchTable').dataTable({
            "responsive": false,
            "bJQueryUI": false,
            "bPaginate": true,
            destroy: true,
            searching: true,
            "sPaginationType": "simple_numbers",
            "iDisplayLength": 10,
            "aaSorting": [[2, 'asc']],
            "bProcessing": true,
            "bLengthChange": false,
            "sAjaxDataProp": "",
            "sAjaxSource": "/Access/GetAccessList",
            "fnServerData": function (sSource, aoData, fnCallback) {

                $.ajax({
                    "dataType": 'json',
                    "url": sSource,
                    "data": aoData,
                    "success": fnCallback
                });
            },
            "aoColumns": [
                { "data": "Data01" },
                { "data": "Data02" },
                { "data": "Data03" },
                { "data": "Data04" },
                { "data": "Data05" },
                {
                    "mRender": function (data, type, row, meta) { return "<p class='text-justify'>" + row.Data06 + "</p>"; }
                }
            ]
        });
        $('#searchTable tbody').on('click', 'tr', function () {
            var idObj = $('td', this).eq(0).text();
            window.location = '/Access/Viewer/' + idObj;
        });
        $('#searchTable tbody').hover(function () {
            $('tr', this).css('cursor', 'pointer');
        });
    }

    function loadPhonesTable() {

        var table = $('#searchTable').dataTable({
            "responsive": false,
            "bJQueryUI": false,
            "bPaginate": true,
            destroy: true,
            searching: true,
            "sPaginationType": "simple_numbers",
            "iDisplayLength": 10,
            "aaSorting": [[2, 'asc']],
            "bProcessing": true,
            "bLengthChange": false,
            "sAjaxDataProp": "",
            "sAjaxSource": "/Info/GetPhonesList",
            "fnServerData": function (sSource, aoData, fnCallback) {

                $.ajax({
                    "dataType": 'json',
                    "url": sSource,
                    "data": aoData,
                    "success": fnCallback
                });
            },
            "aoColumns": [
                { "data": "Data01" },
                { "data": "Data02" },
                { "data": "Data03" },
                { "data": "Data04" }
            ]
        });

    }

    function loadKbCategoryTable() {

        var table = $('#searchTable').dataTable({
            "responsive": false,
            "bJQueryUI": false,
            "bPaginate": true,
            destroy: true,
            searching: true,
            "sPaginationType": "simple_numbers",
            "iDisplayLength": 10,
            "aaSorting": [[1, 'asc']],
            "bProcessing": true,
            "bLengthChange": false,
            "sAjaxDataProp": "",
            "sAjaxSource": "/Config/GetKbCategoryList",
            "fnServerData": function (sSource, aoData, fnCallback) {
                $.ajax({
                    "dataType": 'json',
                    "url": sSource,
                    "data": aoData,
                    "success": fnCallback
                });
            },
            "aoColumns": [
                { "data": "Data01" },
                { "data": "Data02" },
                { "data": "Data03" }

            ]
        });
        $('#searchTable tbody').on('click', 'tr', function () {
            var idObj = $('td', this).eq(0).text();
            window.location = '/Config/KbCategoryEdit/' + idObj;
        });
        $('#searchTable tbody').hover(function () {
            $('tr', this).css('cursor', 'pointer');
        });
    }

    function loadScheduleTable() {

        var table = $('#searchTable').dataTable({
            "responsive": false,
            "bJQueryUI": false,
            "bPaginate": true,
            destroy: true,
            searching: true,
            "sPaginationType": "simple_numbers",
            "iDisplayLength": 10,
            "aaSorting": [[1, 'asc']],
            "bProcessing": true,
            "bLengthChange": false,
            "sAjaxDataProp": "",
            "sAjaxSource": "/Schedule/GetScheduleList",
            "fnServerData": function (sSource, aoData, fnCallback) {
                $.ajax({
                    "dataType": 'json',
                    "url": sSource,
                    "data": aoData,
                    "success": fnCallback
                });
            },
            "aoColumns": [
                { "data": "Data01" },
                { "data": "Data02" },
                { "data": "Data03" },
                { "data": "Data04" },
                { "data": "Data05" }

            ]
        });
        $('#searchTable tbody').on('click', 'tr', function () {
            var idObj = $('td', this).eq(0).text();
            window.location = '/Schedule/Viewer/' + idObj;
        });
        $('#searchTable tbody').hover(function () {
            $('tr', this).css('cursor', 'pointer');
        });
    }

    function loadUserTable() {

        var table = $('#searchTable').dataTable({
            "responsive": false,
            "bJQueryUI": false,
            "bPaginate": true,
            destroy: true,
            searching: true,
            "sPaginationType": "simple_numbers",
            "iDisplayLength": 10,
            "aaSorting": [[0, 'asc']],
            "bProcessing": true,
            "bLengthChange": false,
            "sAjaxDataProp": "",
            "sAjaxSource": "/Settings/GetUserList",
            "fnServerData": function (sSource, aoData, fnCallback) {
                $.ajax({
                    "dataType": 'json',
                    "url": sSource,
                    "data": aoData,
                    "success": fnCallback
                });
            },
            "aoColumns": [
                { "data": "Data01" },
                { "data": "Data02" },
                { "data": "Data03" },
                { "data": "Data04" },
                { "data": "Data05" }

            ]
        });
        $('#searchTable tbody').on('click', 'tr', function () {
            var idObj = $('td', this).eq(0).text();
            window.location = '/Settings/UserEdit/' + idObj;
        });
        $('#searchTable tbody').hover(function () {
            $('tr', this).css('cursor', 'pointer');
        });
    }



    $("#input-category").change(function (evt) {
        var subcategories = $("#input-subcategory");
        subcategories.empty();
        var option = $("<option />");
        option.attr("value", "null").text("Carregando...");
        subcategories.append(option);

        loadSubCategoryList();
    });
    function loadSubCategoryList() {
        var idCategory = $('#input-category option:selected').val();
        $.getJSON('/Kb/GetListSubCategory', { idCategory: idCategory }, function (data) {
            var subcategories = $("#input-subcategory");
            subcategories.empty();
            $.each(data, function (i, item) {
                var option = $("<option />");
                option.attr("value", item.Data01).text(item.Data02);
                subcategories.append(option);
            });
        });
    }

    function loadUserInformation() {
        var txtUsername = $('#input-username').val();

        $.getJSON('/Settings/GetUserInformation', { username: txtUsername }, function (data) {
            $('#input-name').val(data.Data01);
            $('#Name').val(data.Data01);
            $('#input-mail').val(data.Data02);
            $('#Mail').val(data.Data02);
            $('#input-sid').val(data.Data03);
            $('#Sid').val(data.Data03);
        }).error(function () { alert("error"); });
    }

    function loadChart() {

        $.getJSON('/Home/GetDataChart', function (data) {

            $.plot("#myfirstchart", [data], {
                series: {
                    bars: {
                        show: true,
                        barWidth: 0.6,
                        align: "center"
                    }
                }
            });

        });
    }

