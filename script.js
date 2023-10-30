
jQuery(document).ready(function(){
	var nav = jQuery('#nav');
	var content = jQuery('#content');
	
	nav.find('.main-nav-item').click(function(){
		var current = jQuery(this).parent();

		if( current.hasClass('active') ) return;

		current.toggleClass('active');
		jQuery(this).siblings('.sub-nav').hide().slideDown();
		current.siblings('.active').removeClass('active').children('.sub-nav').show().slideUp();
	});
	
	nav.find('.sub-nav-item').click(function(){
		nav.find('.sub-nav-item').removeClass('active');
		jQuery(this).addClass('active');
		
		content.children(jQuery(this).attr('href')).fadeIn().siblings('.content-section').hide();
		return false;
	});
	
	jQuery('img').each(function(){
		if( !jQuery(this).parent().is('a') ){
			jQuery(this).wrap('<a href="' + jQuery(this).attr('src') + '" data-rel="fancybox" ></a>');
		}
	});
	jQuery('a[href$=".jpg"],a[href$=".png"],a[href$=".gif"]').not('[data-rel="fancybox"]').attr("data-rel", "fancybox");
	jQuery('[data-rel="fancybox"]').fancybox({	
		helpers: {
		overlay: {
			locked: false
		}
		}			
	});
	// hash route
	var url_hash = window.location.hash;
	nav.find('[href="' + url_hash + '"]').trigger('click')
		.parent().parent().addClass('active').siblings().removeClass('active');
});

function createDynamicHeader(title, targetId) {
    const headerContainer = document.getElementById(targetId);
    const header = document.createElement('div');
    header.innerHTML = `
      <div class="heading-divider"></div>
      <h3 class="fs-20 heading-title fc-fff">${title}</h3>
    `;
    headerContainer.innerHTML = '';
    headerContainer.appendChild(header);
  }
createDynamicHeader('Introduction', 'header-1');
createDynamicHeader('Theme Installation', 'header-2');
createDynamicHeader('Theme Installation', 'header-2');
createDynamicHeader('Plugin Installation', 'header-3');
createDynamicHeader('Demo Importer', 'header-4');

createDynamicHeader('Child Theme & Theme Customization', 'header-6');
createDynamicHeader('General Setting', 'header-7');
createDynamicHeader('Dashboard Settings', 'header-8');
createDynamicHeader('Import Export', 'header-8a');
createDynamicHeader('Shop', 'header-8b');
createDynamicHeader('Product-settings', 'header-8c');
createDynamicHeader('Course Settings', 'header-8d');
createDynamicHeader('Portfolio Settings', 'header-8e');
createDynamicHeader('Page Settings', 'header-8f');
createDynamicHeader('Blog Settings', 'header-8g');
createDynamicHeader('Typography Settings', 'header-8h');
createDynamicHeader('Style Settings', 'header-8i');
createDynamicHeader('Breadcrumb Settings', 'header-8j');
createDynamicHeader('Footer Settings', 'header-8k');
createDynamicHeader('Header Settings', 'header-8l');	 
createDynamicHeader('Header / Logo', 'header-9');
createDynamicHeader('Creating Menu', 'header-10');
createDynamicHeader('Footer / Copyright', 'header-11');
createDynamicHeader('Creating Page & Set The Homepage', 'header-12');
createDynamicHeader('Managing Courses', 'header-12a');
createDynamicHeader('Portfolio Builder', 'header-14');
createDynamicHeader('Team Builder', 'header-15');
createDynamicHeader('Managing Sidebar', 'header-16');
createDynamicHeader('Header Builder', 'header-17');
createDynamicHeader('Footer Builder', 'header-18');
createDynamicHeader('Elementor Integration', 'header-19');
createDynamicHeader('Plugins', 'header-20');
createDynamicHeader('Icon List', 'header-28a');
