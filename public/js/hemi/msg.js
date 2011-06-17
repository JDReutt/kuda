/* 
 * Kuda includes a library and editor for authoring interactive 3D content for the web.
 * Copyright (C) 2011 SRI International.
 *
 * This program is free software; you can redistribute it and/or modify it under the terms
 * of the GNU General Public License as published by the Free Software Foundation; either 
 * version 2 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; 
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with this program; 
 * if not, write to the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor, 
 * Boston, MA 02110-1301 USA.
 */

var hemi = (function(hemi) {
	/**
	 * @namespace A module for managing the string literals for Message types.
	 * @example
	 * The documentation for each Message type has an example of a typical
	 * Message body for that type (the 'data' property of a Message).
	 */
	hemi.msg = {
		/**
		 * The Message sent when a Model's animation time changes.
		 * @type string
		 * @constant
		 * @example
		 * Sent by hemi.model.Model, data =
		 * {
		 *     time: (the new animation time for the Model)
		 * }
		 */
		animate: 'hemi.animate',
		/**
		 * The Message sent when a Burst effect is triggered.
		 * @type string
		 * @constant
		 * @example
		 * Sent by hemi.effect.Burst, data =
		 * {
		 *     position: (the XYZ position the Burst was triggered at)
		 * }
		 */
		burst: 'hemi.burst',
		/**
		 * The Message sent when a Citizen is cleaning up its resources.
		 * @type string
		 * @constant
		 * @example
		 * Sent by hemi.world.Citizen, data =
		 * { }
		 */
		cleanup: 'hemi.cleanup',
		/**
		 * The Message sent when a Draggable has been dragged.
		 * @type string
		 * @constant
		 * @example
		 * Sent by hemi.manip.Draggable, data =
		 * {
		 *     drag: (the change in XYZ position caused by the drag)
		 * }
		 */
		drag: 'hemi.drag',
		/**
		 * The Message sent when a tool is enabled or disabled.
		 * @type string
		 * @constant
		 * @example
		 * Sent by hext.tools.BaseTool, data =
		 * {
		 *     enabled: (flag indicating if the tool is enabled)
		 * }
		 */
		enable: 'hemi.enable',
		/**
		 * The Message sent when something is loaded.
		 * @type string
		 * @constant
		 * @example
		 * Sent by hemi.audio.Audio, data =
		 * {
		 *     src: (the URL of the audio file loaded)
		 * }
		 * @example
		 * Sent by hemi.hud.HudImage, data =
		 * { }
		 * @example
		 * Sent by hemi.model.Model, data =
		 * { }
		 * @example
		 * Sent by hemi.scene.Scene, data =
		 * { }
		 */
		load: 'hemi.load',
		/**
		 * The Message sent when a shape is picked by a mouse down.
		 * @type string
		 * @constant
		 * @example
		 * Sent by hemi.world, data =
		 * {
		 *     mouseEvent: (the o3d.Event generated by the mousedown)
		 *     pickInfo: (the o3djs.picking.PickInfo generated by the pick)
		 * }
		 */
		pick: 'hemi.pick',
		/**
		 * The Message sent when a task's progress data has been updated.
		 * @type string
		 * @constant
		 * @example
		 * Sent by hemi.world, data = 
		 * {
		 *     isTotal: (flag indicating if percent is for all current tasks)
		 *     percent: (number indicating the percentage complete, 0-100)
		 *     task: (id for the task, typically url of the file being loaded)
		 * }
		 */
		progress: 'hemi.progress',
		/**
		 * The Message sent when the World's ready function is called.
		 * @type string
		 * @constant
		 * @example
		 * Sent by hemi.world, data =
		 * { }
		 */
        ready: 'hemi.ready',
		/**
		 * The Message sent when a Scalable has been scaled.
		 * @type string
		 * @constant
		 * @example
		 * Sent by hemi.manip.Scalable, data =
		 * {
		 *     scale: (the new scale)
		 * }
		 */
        scale: 'hemi.scale',
		/**
		 * The Message sent when a process starts.
		 * @type string
		 * @constant
		 * @example
		 * Sent by hemi.animation.Animation, data =
		 * { }
		 * @example
		 * Sent by hemi.audio.Audio, data =
		 * { }
		 * @example
		 * Sent by hemi.effect.Trail, data =
		 * { }
		 * @example
		 * Sent by hemi.motion.Rotator, data =
		 * { }
		 * @example
		 * Sent by hemi.motion.Translator, data =
		 * { }
		 * @example
		 * Sent by hemi.time.Timer, data =
		 * {
		 *     time: (the countdown the Timer is starting)
		 * }
		 * @example
		 * Sent by hemi.view.Camera, data =
		 * {
		 *     viewpoint: (Viewpoint the Camera is moving to)
		 * }
		 */
		start: 'hemi.start',
		/**
		 * The Message sent when a process stops.
		 * @type string
		 * @constant
		 * @example
		 * Sent by hemi.animation.Animation, data =
		 * { }
		 * @example
		 * Sent by hemi.audio.Audio, data =
		 * { }
		 * @example
		 * Sent by hemi.effect.Trail, data =
		 * { }
		 * @example
		 * Sent by hemi.motion.Rotator, data =
		 * { }
		 * @example
		 * Sent by hemi.motion.Translator, data =
		 * { }
		 * @example
		 * Sent by hemi.time.Timer, data =
		 * {
		 *     time: (the amount of time counted by the Timer)
		 * }
		 * @example
		 * Sent by hemi.view.Camera, data =
		 * {
		 *     viewpoint: (Viewpoint the Camera moved to)
		 * }
		 */
		stop: 'hemi.stop',
		/**
		 * The Message sent when something is unloaded.
		 * @type string
		 * @constant
		 * @example
		 * Sent by hemi.audio.Audio, data =
		 * { }
		 * @example
		 * Sent by hemi.model.Model, data =
		 * { }
		 * @example
		 * Sent by hemi.scene.Scene, data =
		 * { }
		 */
		unload: 'hemi.unload',
		/**
		 * The Message sent when something is displayed or hidden.
		 * @type string
		 * @constant
		 * @example
		 * Sent by hemi.effect.Emitter, data =
		 * {
		 *     visible: (flag indicating if the Emitter is visible)
		 * }
		 * @example
		 * Sent by hemi.hud.HudDisplay, data =
		 * {
		 *     page: (the page number currently shown or 0 if the HudDisplay is hidden)
		 * }
		 * @example
		 * Sent by hext.tools.BaseTool, data =
		 * {
		 *     visible: (flag indicating if the tool is visible)
		 * }
		 */
		visible: 'hemi.visible',
		
		// Wildcard functions
		/**
		 * Register the given handler to receive Messages of the specified type
		 * from any source. This creates a MessageTarget.
		 * 
		 * @param {string} type type of Message to handle
		 * @param {Object} handler either a function or an object
		 * @param {string} opt_func name of the function to call if handler is
		 *     an object
		 * @param {string[]} opt_args optional array of names of arguments to
		 *     pass to the handler. Otherwise the entire Message is just passed
		 *     in.
		 * @return {hemi.dispatch.MessageTarget} the created MessageTarget
		 */
		subscribe: function(type, handler, opt_func, opt_args) {
			return hemi.dispatch.registerTarget(hemi.dispatch.WILDCARD, type,
				handler, opt_func, opt_args);
		},
		
		/**
		 * Remove the given MessageTarget for the specified Message type. Note
		 * that this removes a MessageTarget registered with the wildcard as the
		 * source id. It does not remove the MessageTarget from any Citizens it
		 * may be directly registered with.
		 * 
		 * @param {hemi.dispatch.MessageTarget} target the MessageTarget to
		 *     remove from the Dispatch
		 * @param {string} opt_type Message type the MessageTarget was
		 *     registered for
		 * @return {hemi.dispatch.MessageTarget} the removed MessageTarget or
		 *     null
		 */
		unsubscribe: function(target, opt_type) {
			return hemi.dispatch.removeTarget(target, {
				src: hemi.dispatch.WILDCARD,
				msg: opt_type
			});
		}
	};

	return hemi;
})(hemi || {});
