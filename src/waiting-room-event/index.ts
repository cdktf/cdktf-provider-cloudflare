/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/waiting_room_event
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WaitingRoomEventConfig extends cdktf.TerraformMetaArguments {
  /**
  * If set, the event will override the waiting room's `custom_page_html` property while it is active. If null, the event will inherit it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/waiting_room_event#custom_page_html WaitingRoomEvent#custom_page_html}
  */
  readonly customPageHtml?: string;
  /**
  * A note that you can use to add more details about the event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/waiting_room_event#description WaitingRoomEvent#description}
  */
  readonly description?: string;
  /**
  * If set, the event will override the waiting room's `disable_session_renewal` property while it is active. If null, the event will inherit it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/waiting_room_event#disable_session_renewal WaitingRoomEvent#disable_session_renewal}
  */
  readonly disableSessionRenewal?: boolean | cdktf.IResolvable;
  /**
  * An ISO 8601 timestamp that marks the end of the event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/waiting_room_event#event_end_time WaitingRoomEvent#event_end_time}
  */
  readonly eventEndTime: string;
  /**
  * An ISO 8601 timestamp that marks the start of the event. At this time, queued users will be processed with the event's configuration. The start time must be at least one minute before `event_end_time`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/waiting_room_event#event_start_time WaitingRoomEvent#event_start_time}
  */
  readonly eventStartTime: string;
  /**
  * A unique name to identify the event. Only alphanumeric characters, hyphens and underscores are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/waiting_room_event#name WaitingRoomEvent#name}
  */
  readonly name: string;
  /**
  * If set, the event will override the waiting room's `new_users_per_minute` property while it is active. If null, the event will inherit it. This can only be set if the event's `total_active_users` property is also set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/waiting_room_event#new_users_per_minute WaitingRoomEvent#new_users_per_minute}
  */
  readonly newUsersPerMinute?: number;
  /**
  * An ISO 8601 timestamp that marks when to begin queueing all users before the event starts. The prequeue must start at least five minutes before `event_start_time`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/waiting_room_event#prequeue_start_time WaitingRoomEvent#prequeue_start_time}
  */
  readonly prequeueStartTime?: string;
  /**
  * If set, the event will override the waiting room's `queueing_method` property while it is active. If null, the event will inherit it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/waiting_room_event#queueing_method WaitingRoomEvent#queueing_method}
  */
  readonly queueingMethod?: string;
  /**
  * If set, the event will override the waiting room's `session_duration` property while it is active. If null, the event will inherit it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/waiting_room_event#session_duration WaitingRoomEvent#session_duration}
  */
  readonly sessionDuration?: number;
  /**
  * If enabled, users in the prequeue will be shuffled randomly at the `event_start_time`. Requires that `prequeue_start_time` is not null. This is useful for situations when many users will join the event prequeue at the same time and you want to shuffle them to ensure fairness. Naturally, it makes the most sense to enable this feature when the `queueing_method` during the event respects ordering such as **fifo**, or else the shuffling may be unnecessary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/waiting_room_event#shuffle_at_event_start WaitingRoomEvent#shuffle_at_event_start}
  */
  readonly shuffleAtEventStart?: boolean | cdktf.IResolvable;
  /**
  * Suspends or allows an event. If set to `true`, the event is ignored and traffic will be handled based on the waiting room configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/waiting_room_event#suspended WaitingRoomEvent#suspended}
  */
  readonly suspended?: boolean | cdktf.IResolvable;
  /**
  * If set, the event will override the waiting room's `total_active_users` property while it is active. If null, the event will inherit it. This can only be set if the event's `new_users_per_minute` property is also set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/waiting_room_event#total_active_users WaitingRoomEvent#total_active_users}
  */
  readonly totalActiveUsers?: number;
  /**
  * If set, the event will override the waiting room's `turnstile_action` property while it is active. If null, the event will inherit it.
  * Available values: "log", "infinite_queue".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/waiting_room_event#turnstile_action WaitingRoomEvent#turnstile_action}
  */
  readonly turnstileAction?: string;
  /**
  * If set, the event will override the waiting room's `turnstile_mode` property while it is active. If null, the event will inherit it.
  * Available values: "off", "invisible", "visible_non_interactive", "visible_managed".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/waiting_room_event#turnstile_mode WaitingRoomEvent#turnstile_mode}
  */
  readonly turnstileMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/waiting_room_event#waiting_room_id WaitingRoomEvent#waiting_room_id}
  */
  readonly waitingRoomId: string;
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/waiting_room_event#zone_id WaitingRoomEvent#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/waiting_room_event cloudflare_waiting_room_event}
*/
export class WaitingRoomEvent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_waiting_room_event";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WaitingRoomEvent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WaitingRoomEvent to import
  * @param importFromId The id of the existing WaitingRoomEvent that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/waiting_room_event#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WaitingRoomEvent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_waiting_room_event", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/waiting_room_event cloudflare_waiting_room_event} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WaitingRoomEventConfig
  */
  public constructor(scope: Construct, id: string, config: WaitingRoomEventConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_waiting_room_event',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.14.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customPageHtml = config.customPageHtml;
    this._description = config.description;
    this._disableSessionRenewal = config.disableSessionRenewal;
    this._eventEndTime = config.eventEndTime;
    this._eventStartTime = config.eventStartTime;
    this._name = config.name;
    this._newUsersPerMinute = config.newUsersPerMinute;
    this._prequeueStartTime = config.prequeueStartTime;
    this._queueingMethod = config.queueingMethod;
    this._sessionDuration = config.sessionDuration;
    this._shuffleAtEventStart = config.shuffleAtEventStart;
    this._suspended = config.suspended;
    this._totalActiveUsers = config.totalActiveUsers;
    this._turnstileAction = config.turnstileAction;
    this._turnstileMode = config.turnstileMode;
    this._waitingRoomId = config.waitingRoomId;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // custom_page_html - computed: false, optional: true, required: false
  private _customPageHtml?: string; 
  public get customPageHtml() {
    return this.getStringAttribute('custom_page_html');
  }
  public set customPageHtml(value: string) {
    this._customPageHtml = value;
  }
  public resetCustomPageHtml() {
    this._customPageHtml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPageHtmlInput() {
    return this._customPageHtml;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disable_session_renewal - computed: false, optional: true, required: false
  private _disableSessionRenewal?: boolean | cdktf.IResolvable; 
  public get disableSessionRenewal() {
    return this.getBooleanAttribute('disable_session_renewal');
  }
  public set disableSessionRenewal(value: boolean | cdktf.IResolvable) {
    this._disableSessionRenewal = value;
  }
  public resetDisableSessionRenewal() {
    this._disableSessionRenewal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSessionRenewalInput() {
    return this._disableSessionRenewal;
  }

  // event_end_time - computed: false, optional: false, required: true
  private _eventEndTime?: string; 
  public get eventEndTime() {
    return this.getStringAttribute('event_end_time');
  }
  public set eventEndTime(value: string) {
    this._eventEndTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventEndTimeInput() {
    return this._eventEndTime;
  }

  // event_start_time - computed: false, optional: false, required: true
  private _eventStartTime?: string; 
  public get eventStartTime() {
    return this.getStringAttribute('event_start_time');
  }
  public set eventStartTime(value: string) {
    this._eventStartTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventStartTimeInput() {
    return this._eventStartTime;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // new_users_per_minute - computed: false, optional: true, required: false
  private _newUsersPerMinute?: number; 
  public get newUsersPerMinute() {
    return this.getNumberAttribute('new_users_per_minute');
  }
  public set newUsersPerMinute(value: number) {
    this._newUsersPerMinute = value;
  }
  public resetNewUsersPerMinute() {
    this._newUsersPerMinute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newUsersPerMinuteInput() {
    return this._newUsersPerMinute;
  }

  // prequeue_start_time - computed: false, optional: true, required: false
  private _prequeueStartTime?: string; 
  public get prequeueStartTime() {
    return this.getStringAttribute('prequeue_start_time');
  }
  public set prequeueStartTime(value: string) {
    this._prequeueStartTime = value;
  }
  public resetPrequeueStartTime() {
    this._prequeueStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prequeueStartTimeInput() {
    return this._prequeueStartTime;
  }

  // queueing_method - computed: false, optional: true, required: false
  private _queueingMethod?: string; 
  public get queueingMethod() {
    return this.getStringAttribute('queueing_method');
  }
  public set queueingMethod(value: string) {
    this._queueingMethod = value;
  }
  public resetQueueingMethod() {
    this._queueingMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueingMethodInput() {
    return this._queueingMethod;
  }

  // session_duration - computed: false, optional: true, required: false
  private _sessionDuration?: number; 
  public get sessionDuration() {
    return this.getNumberAttribute('session_duration');
  }
  public set sessionDuration(value: number) {
    this._sessionDuration = value;
  }
  public resetSessionDuration() {
    this._sessionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionDurationInput() {
    return this._sessionDuration;
  }

  // shuffle_at_event_start - computed: true, optional: true, required: false
  private _shuffleAtEventStart?: boolean | cdktf.IResolvable; 
  public get shuffleAtEventStart() {
    return this.getBooleanAttribute('shuffle_at_event_start');
  }
  public set shuffleAtEventStart(value: boolean | cdktf.IResolvable) {
    this._shuffleAtEventStart = value;
  }
  public resetShuffleAtEventStart() {
    this._shuffleAtEventStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shuffleAtEventStartInput() {
    return this._shuffleAtEventStart;
  }

  // suspended - computed: true, optional: true, required: false
  private _suspended?: boolean | cdktf.IResolvable; 
  public get suspended() {
    return this.getBooleanAttribute('suspended');
  }
  public set suspended(value: boolean | cdktf.IResolvable) {
    this._suspended = value;
  }
  public resetSuspended() {
    this._suspended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendedInput() {
    return this._suspended;
  }

  // total_active_users - computed: false, optional: true, required: false
  private _totalActiveUsers?: number; 
  public get totalActiveUsers() {
    return this.getNumberAttribute('total_active_users');
  }
  public set totalActiveUsers(value: number) {
    this._totalActiveUsers = value;
  }
  public resetTotalActiveUsers() {
    this._totalActiveUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalActiveUsersInput() {
    return this._totalActiveUsers;
  }

  // turnstile_action - computed: false, optional: true, required: false
  private _turnstileAction?: string; 
  public get turnstileAction() {
    return this.getStringAttribute('turnstile_action');
  }
  public set turnstileAction(value: string) {
    this._turnstileAction = value;
  }
  public resetTurnstileAction() {
    this._turnstileAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get turnstileActionInput() {
    return this._turnstileAction;
  }

  // turnstile_mode - computed: false, optional: true, required: false
  private _turnstileMode?: string; 
  public get turnstileMode() {
    return this.getStringAttribute('turnstile_mode');
  }
  public set turnstileMode(value: string) {
    this._turnstileMode = value;
  }
  public resetTurnstileMode() {
    this._turnstileMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get turnstileModeInput() {
    return this._turnstileMode;
  }

  // waiting_room_id - computed: false, optional: false, required: true
  private _waitingRoomId?: string; 
  public get waitingRoomId() {
    return this.getStringAttribute('waiting_room_id');
  }
  public set waitingRoomId(value: string) {
    this._waitingRoomId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get waitingRoomIdInput() {
    return this._waitingRoomId;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_page_html: cdktf.stringToTerraform(this._customPageHtml),
      description: cdktf.stringToTerraform(this._description),
      disable_session_renewal: cdktf.booleanToTerraform(this._disableSessionRenewal),
      event_end_time: cdktf.stringToTerraform(this._eventEndTime),
      event_start_time: cdktf.stringToTerraform(this._eventStartTime),
      name: cdktf.stringToTerraform(this._name),
      new_users_per_minute: cdktf.numberToTerraform(this._newUsersPerMinute),
      prequeue_start_time: cdktf.stringToTerraform(this._prequeueStartTime),
      queueing_method: cdktf.stringToTerraform(this._queueingMethod),
      session_duration: cdktf.numberToTerraform(this._sessionDuration),
      shuffle_at_event_start: cdktf.booleanToTerraform(this._shuffleAtEventStart),
      suspended: cdktf.booleanToTerraform(this._suspended),
      total_active_users: cdktf.numberToTerraform(this._totalActiveUsers),
      turnstile_action: cdktf.stringToTerraform(this._turnstileAction),
      turnstile_mode: cdktf.stringToTerraform(this._turnstileMode),
      waiting_room_id: cdktf.stringToTerraform(this._waitingRoomId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_page_html: {
        value: cdktf.stringToHclTerraform(this._customPageHtml),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_session_renewal: {
        value: cdktf.booleanToHclTerraform(this._disableSessionRenewal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      event_end_time: {
        value: cdktf.stringToHclTerraform(this._eventEndTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_start_time: {
        value: cdktf.stringToHclTerraform(this._eventStartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      new_users_per_minute: {
        value: cdktf.numberToHclTerraform(this._newUsersPerMinute),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prequeue_start_time: {
        value: cdktf.stringToHclTerraform(this._prequeueStartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      queueing_method: {
        value: cdktf.stringToHclTerraform(this._queueingMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_duration: {
        value: cdktf.numberToHclTerraform(this._sessionDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shuffle_at_event_start: {
        value: cdktf.booleanToHclTerraform(this._shuffleAtEventStart),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      suspended: {
        value: cdktf.booleanToHclTerraform(this._suspended),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      total_active_users: {
        value: cdktf.numberToHclTerraform(this._totalActiveUsers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      turnstile_action: {
        value: cdktf.stringToHclTerraform(this._turnstileAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      turnstile_mode: {
        value: cdktf.stringToHclTerraform(this._turnstileMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      waiting_room_id: {
        value: cdktf.stringToHclTerraform(this._waitingRoomId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
