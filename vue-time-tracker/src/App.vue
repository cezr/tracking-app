<template>
	<div id="wrapper">
	    <nav class="navbar navbar-default">
	      <div class="container">
	        <a class="navbar-brand" href="#">
	          <i class="glyphicon glyphicon-time"></i>
	          Vue Time Tracker
	        </a>
	        <ul class="nav navbar-nav">
	          <li><router-link to="/home" tag="a">Home</router-link></li>
	          <li><router-link to="/time-entries" tag="a">Time Entries</router-link></li>
	        </ul>
	      </div>
	    </nav>
	    <div class="container">
	      <div class="col-sm-3">

	      </div>
	      <div class="col-sm-9">
	        <router-view></router-view>
	      </div>
	    </div>
	  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
