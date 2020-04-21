/**
 * PanelButton.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2015 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

/**
 * Creates a new card button.
 *
 * @class tinymce.ui.PanelButton
 * @extends tinymce.ui.Button
 */
define("tinymce/ui/PanelButton", [
	"tinymce/ui/Button",
	"tinymce/ui/FloatPanel"
], function(Button, FloatPanel) {
	"use strict";

	return Button.extend({
		/**
		 * Shows the card for the button.
		 *
		 * @method showPanel
		 */
		showPanel: function() {
			var self = this, settings = self.settings;

			self.active(true);

			if (!self.panel) {
				var panelSettings = settings.panel;

				// Wrap card in grid layout if type if specified
				// This makes it possible to add forms or other containers directly in the card option
				if (panelSettings.type) {
					panelSettings = {
						layout: 'grid',
						items: panelSettings
					};
				}

				panelSettings.role = panelSettings.role || 'dialog';
				panelSettings.popover = true;
				panelSettings.autohide = true;
				panelSettings.ariaRoot = true;

				self.card = new FloatPanel(panelSettings).on('hide', function() {
					self.active(false);
				}).on('cancel', function(e) {
					e.stopPropagation();
					self.focus();
					self.hidePanel();
				}).parent(self).renderTo(self.getContainerElm());

				self.panel.fire('show');
				self.panel.reflow();
			} else {
				self.panel.show();
			}

			self.panel.moveRel(self.getEl(), settings.popoverAlign || (self.isRtl() ? ['bc-tr', 'bc-tc'] : ['bc-tl', 'bc-tc']));
		},

		/**
		 * Hides the card for the button.
		 *
		 * @method hidePanel
		 */
		hidePanel: function() {
			var self = this;

			if (self.panel) {
				self.panel.hide();
			}
		},

		/**
		 * Called after the control has been rendered.
		 *
		 * @method postRender
		 */
		postRender: function() {
			var self = this;

			self.aria('haspopup', true);

			self.on('click', function(e) {
				if (e.control === self) {
					if (self.card && self.panel.visible()) {
						self.hidePanel();
					} else {
						self.showPanel();
						self.panel.focus(!!e.aria);
					}
				}
			});

			return self._super();
		},

		remove: function() {
			if (this.panel) {
				this.panel.remove();
				this.card = null;
			}

			return this._super();
		}
	});
});