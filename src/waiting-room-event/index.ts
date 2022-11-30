// https://www.terraform.io/docs/providers/cloudflare/r/waiting_room_event
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WaitingRoomEventConfig extends cdktf.TerraformMetaArguments {
  /**
  * This is a templated html file that will be rendered at the edge.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waiting_room_event#custom_page_html WaitingRoomEvent#custom_page_html}
  */
  readonly customPageHtml?: string;
  /**
  * A description to let users add more details about the event.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waiting_room_event#description WaitingRoomEvent#description}
  */
  readonly description?: string;
  /**
  * Disables automatic renewal of session cookies.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waiting_room_event#disable_session_renewal WaitingRoomEvent#disable_session_renewal}
  */
  readonly disableSessionRenewal?: boolean | cdktf.IResolvable;
  /**
  * ISO 8601 timestamp that marks the end of the event. **Modifying this attribute will force creation of a new resource.**
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waiting_room_event#event_end_time WaitingRoomEvent#event_end_time}
  */
  readonly eventEndTime: string;
  /**
  * ISO 8601 timestamp that marks the start of the event. Must occur at least 1 minute before `event_end_time`. **Modifying this attribute will force creation of a new resource.**
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waiting_room_event#event_start_time WaitingRoomEvent#event_start_time}
  */
  readonly eventStartTime: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waiting_room_event#id WaitingRoomEvent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique name to identify the event. Only alphanumeric characters, hyphens, and underscores are allowed. **Modifying this attribute will force creation of a new resource.**
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waiting_room_event#name WaitingRoomEvent#name}
  */
  readonly name: string;
  /**
  * The number of new users that will be let into the route every minute.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waiting_room_event#new_users_per_minute WaitingRoomEvent#new_users_per_minute}
  */
  readonly newUsersPerMinute?: number;
  /**
  * ISO 8601 timestamp that marks when to begin queueing all users before the event starts. Must occur at least 5 minutes before `event_start_time`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waiting_room_event#prequeue_start_time WaitingRoomEvent#prequeue_start_time}
  */
  readonly prequeueStartTime?: string;
  /**
  * The queueing method used by the waiting room. Available values: `fifo`, `random`, `passthrough`, `reject`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waiting_room_event#queueing_method WaitingRoomEvent#queueing_method}
  */
  readonly queueingMethod?: string;
  /**
  * Lifetime of a cookie (in minutes) set by Cloudflare for users who get access to the origin.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waiting_room_event#session_duration WaitingRoomEvent#session_duration}
  */
  readonly sessionDuration?: number;
  /**
  * Users in the prequeue will be shuffled randomly at the `event_start_time`. Requires that `prequeue_start_time` is not null. Defaults to `false`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waiting_room_event#shuffle_at_event_start WaitingRoomEvent#shuffle_at_event_start}
  */
  readonly shuffleAtEventStart?: boolean | cdktf.IResolvable;
  /**
  * If suspended, the event is ignored and traffic will be handled based on the waiting room configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waiting_room_event#suspended WaitingRoomEvent#suspended}
  */
  readonly suspended?: boolean | cdktf.IResolvable;
  /**
  * The total number of active user sessions on the route at a point in time.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waiting_room_event#total_active_users WaitingRoomEvent#total_active_users}
  */
  readonly totalActiveUsers?: number;
  /**
  * The Waiting Room ID the event should apply to. **Modifying this attribute will force creation of a new resource.**
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waiting_room_event#waiting_room_id WaitingRoomEvent#waiting_room_id}
  */
  readonly waitingRoomId: string;
  /**
  * The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waiting_room_event#zone_id WaitingRoomEvent#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/waiting_room_event cloudflare_waiting_room_event}
*/
export class WaitingRoomEvent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_waiting_room_event";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare/r/waiting_room_event cloudflare_waiting_room_event} Resource
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
        providerVersion: '3.29.0',
        providerVersionConstraint: '~> 3.14'
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
    this._id = config.id;
    this._name = config.name;
    this._newUsersPerMinute = config.newUsersPerMinute;
    this._prequeueStartTime = config.prequeueStartTime;
    this._queueingMethod = config.queueingMethod;
    this._sessionDuration = config.sessionDuration;
    this._shuffleAtEventStart = config.shuffleAtEventStart;
    this._suspended = config.suspended;
    this._totalActiveUsers = config.totalActiveUsers;
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

  // description - computed: false, optional: true, required: false
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

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // shuffle_at_event_start - computed: false, optional: true, required: false
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

  // suspended - computed: false, optional: true, required: false
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      new_users_per_minute: cdktf.numberToTerraform(this._newUsersPerMinute),
      prequeue_start_time: cdktf.stringToTerraform(this._prequeueStartTime),
      queueing_method: cdktf.stringToTerraform(this._queueingMethod),
      session_duration: cdktf.numberToTerraform(this._sessionDuration),
      shuffle_at_event_start: cdktf.booleanToTerraform(this._shuffleAtEventStart),
      suspended: cdktf.booleanToTerraform(this._suspended),
      total_active_users: cdktf.numberToTerraform(this._totalActiveUsers),
      waiting_room_id: cdktf.stringToTerraform(this._waitingRoomId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }
}
