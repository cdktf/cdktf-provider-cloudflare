/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/waiting_room
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WaitingRoomConfig extends cdktf.TerraformMetaArguments {
  /**
  * A cookie suffix to be appended to the Cloudflare waiting room cookie name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/waiting_room#cookie_suffix WaitingRoom#cookie_suffix}
  */
  readonly cookieSuffix?: string;
  /**
  * This is a templated html file that will be rendered at the edge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/waiting_room#custom_page_html WaitingRoom#custom_page_html}
  */
  readonly customPageHtml?: string;
  /**
  * The language to use for the default waiting room page. Available values: `de-DE`, `es-ES`, `en-US`, `fr-FR`, `id-ID`, `it-IT`, `ja-JP`, `ko-KR`, `nl-NL`, `pl-PL`, `pt-BR`, `tr-TR`, `zh-CN`, `zh-TW`, `ru-RU`, `fa-IR`. Defaults to `en-US`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/waiting_room#default_template_language WaitingRoom#default_template_language}
  */
  readonly defaultTemplateLanguage?: string;
  /**
  * A description to add more details about the waiting room.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/waiting_room#description WaitingRoom#description}
  */
  readonly description?: string;
  /**
  * Disables automatic renewal of session cookies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/waiting_room#disable_session_renewal WaitingRoom#disable_session_renewal}
  */
  readonly disableSessionRenewal?: boolean | cdktf.IResolvable;
  /**
  * Host name for which the waiting room will be applied (no wildcards).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/waiting_room#host WaitingRoom#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/waiting_room#id WaitingRoom#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If true, requests to the waiting room with the header `Accept: application/json` will receive a JSON response object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/waiting_room#json_response_enabled WaitingRoom#json_response_enabled}
  */
  readonly jsonResponseEnabled?: boolean | cdktf.IResolvable;
  /**
  * A unique name to identify the waiting room. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/waiting_room#name WaitingRoom#name}
  */
  readonly name: string;
  /**
  * The number of new users that will be let into the route every minute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/waiting_room#new_users_per_minute WaitingRoom#new_users_per_minute}
  */
  readonly newUsersPerMinute: number;
  /**
  * The path within the host to enable the waiting room on. Defaults to `/`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/waiting_room#path WaitingRoom#path}
  */
  readonly path?: string;
  /**
  * If queue_all is true, then all traffic will be sent to the waiting room.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/waiting_room#queue_all WaitingRoom#queue_all}
  */
  readonly queueAll?: boolean | cdktf.IResolvable;
  /**
  * The queueing method used by the waiting room. Available values: `fifo`, `random`, `passthrough`, `reject`. Defaults to `fifo`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/waiting_room#queueing_method WaitingRoom#queueing_method}
  */
  readonly queueingMethod?: string;
  /**
  * HTTP status code returned to a user while in the queue. Defaults to `200`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/waiting_room#queueing_status_code WaitingRoom#queueing_status_code}
  */
  readonly queueingStatusCode?: number;
  /**
  * Lifetime of a cookie (in minutes) set by Cloudflare for users who get access to the origin. Defaults to `5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/waiting_room#session_duration WaitingRoom#session_duration}
  */
  readonly sessionDuration?: number;
  /**
  * Suspends the waiting room.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/waiting_room#suspended WaitingRoom#suspended}
  */
  readonly suspended?: boolean | cdktf.IResolvable;
  /**
  * The total number of active user sessions on the route at a point in time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/waiting_room#total_active_users WaitingRoom#total_active_users}
  */
  readonly totalActiveUsers: number;
  /**
  * The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/waiting_room#zone_id WaitingRoom#zone_id}
  */
  readonly zoneId: string;
  /**
  * additional_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/waiting_room#additional_routes WaitingRoom#additional_routes}
  */
  readonly additionalRoutes?: WaitingRoomAdditionalRoutes[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/waiting_room#timeouts WaitingRoom#timeouts}
  */
  readonly timeouts?: WaitingRoomTimeouts;
}
export interface WaitingRoomAdditionalRoutes {
  /**
  * The additional host name for which the waiting room to be applied on (no wildcards).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/waiting_room#host WaitingRoom#host}
  */
  readonly host: string;
  /**
  * The path within the additional host to enable the waiting room on. Defaults to `/`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/waiting_room#path WaitingRoom#path}
  */
  readonly path?: string;
}

export function waitingRoomAdditionalRoutesToTerraform(struct?: WaitingRoomAdditionalRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export class WaitingRoomAdditionalRoutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WaitingRoomAdditionalRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaitingRoomAdditionalRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._path = value.path;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class WaitingRoomAdditionalRoutesList extends cdktf.ComplexList {
  public internalValue? : WaitingRoomAdditionalRoutes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WaitingRoomAdditionalRoutesOutputReference {
    return new WaitingRoomAdditionalRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WaitingRoomTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/waiting_room#create WaitingRoom#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/waiting_room#update WaitingRoom#update}
  */
  readonly update?: string;
}

export function waitingRoomTimeoutsToTerraform(struct?: WaitingRoomTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class WaitingRoomTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WaitingRoomTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaitingRoomTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/waiting_room cloudflare_waiting_room}
*/
export class WaitingRoom extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_waiting_room";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WaitingRoom resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WaitingRoom to import
  * @param importFromId The id of the existing WaitingRoom that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/waiting_room#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WaitingRoom to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_waiting_room", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/waiting_room cloudflare_waiting_room} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WaitingRoomConfig
  */
  public constructor(scope: Construct, id: string, config: WaitingRoomConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_waiting_room',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '4.22.0',
        providerVersionConstraint: '~> 4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cookieSuffix = config.cookieSuffix;
    this._customPageHtml = config.customPageHtml;
    this._defaultTemplateLanguage = config.defaultTemplateLanguage;
    this._description = config.description;
    this._disableSessionRenewal = config.disableSessionRenewal;
    this._host = config.host;
    this._id = config.id;
    this._jsonResponseEnabled = config.jsonResponseEnabled;
    this._name = config.name;
    this._newUsersPerMinute = config.newUsersPerMinute;
    this._path = config.path;
    this._queueAll = config.queueAll;
    this._queueingMethod = config.queueingMethod;
    this._queueingStatusCode = config.queueingStatusCode;
    this._sessionDuration = config.sessionDuration;
    this._suspended = config.suspended;
    this._totalActiveUsers = config.totalActiveUsers;
    this._zoneId = config.zoneId;
    this._additionalRoutes.internalValue = config.additionalRoutes;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cookie_suffix - computed: false, optional: true, required: false
  private _cookieSuffix?: string; 
  public get cookieSuffix() {
    return this.getStringAttribute('cookie_suffix');
  }
  public set cookieSuffix(value: string) {
    this._cookieSuffix = value;
  }
  public resetCookieSuffix() {
    this._cookieSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieSuffixInput() {
    return this._cookieSuffix;
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

  // default_template_language - computed: false, optional: true, required: false
  private _defaultTemplateLanguage?: string; 
  public get defaultTemplateLanguage() {
    return this.getStringAttribute('default_template_language');
  }
  public set defaultTemplateLanguage(value: string) {
    this._defaultTemplateLanguage = value;
  }
  public resetDefaultTemplateLanguage() {
    this._defaultTemplateLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTemplateLanguageInput() {
    return this._defaultTemplateLanguage;
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

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // json_response_enabled - computed: false, optional: true, required: false
  private _jsonResponseEnabled?: boolean | cdktf.IResolvable; 
  public get jsonResponseEnabled() {
    return this.getBooleanAttribute('json_response_enabled');
  }
  public set jsonResponseEnabled(value: boolean | cdktf.IResolvable) {
    this._jsonResponseEnabled = value;
  }
  public resetJsonResponseEnabled() {
    this._jsonResponseEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonResponseEnabledInput() {
    return this._jsonResponseEnabled;
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

  // new_users_per_minute - computed: false, optional: false, required: true
  private _newUsersPerMinute?: number; 
  public get newUsersPerMinute() {
    return this.getNumberAttribute('new_users_per_minute');
  }
  public set newUsersPerMinute(value: number) {
    this._newUsersPerMinute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newUsersPerMinuteInput() {
    return this._newUsersPerMinute;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // queue_all - computed: false, optional: true, required: false
  private _queueAll?: boolean | cdktf.IResolvable; 
  public get queueAll() {
    return this.getBooleanAttribute('queue_all');
  }
  public set queueAll(value: boolean | cdktf.IResolvable) {
    this._queueAll = value;
  }
  public resetQueueAll() {
    this._queueAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueAllInput() {
    return this._queueAll;
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

  // queueing_status_code - computed: false, optional: true, required: false
  private _queueingStatusCode?: number; 
  public get queueingStatusCode() {
    return this.getNumberAttribute('queueing_status_code');
  }
  public set queueingStatusCode(value: number) {
    this._queueingStatusCode = value;
  }
  public resetQueueingStatusCode() {
    this._queueingStatusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueingStatusCodeInput() {
    return this._queueingStatusCode;
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

  // total_active_users - computed: false, optional: false, required: true
  private _totalActiveUsers?: number; 
  public get totalActiveUsers() {
    return this.getNumberAttribute('total_active_users');
  }
  public set totalActiveUsers(value: number) {
    this._totalActiveUsers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get totalActiveUsersInput() {
    return this._totalActiveUsers;
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

  // additional_routes - computed: false, optional: true, required: false
  private _additionalRoutes = new WaitingRoomAdditionalRoutesList(this, "additional_routes", false);
  public get additionalRoutes() {
    return this._additionalRoutes;
  }
  public putAdditionalRoutes(value: WaitingRoomAdditionalRoutes[] | cdktf.IResolvable) {
    this._additionalRoutes.internalValue = value;
  }
  public resetAdditionalRoutes() {
    this._additionalRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalRoutesInput() {
    return this._additionalRoutes.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new WaitingRoomTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: WaitingRoomTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cookie_suffix: cdktf.stringToTerraform(this._cookieSuffix),
      custom_page_html: cdktf.stringToTerraform(this._customPageHtml),
      default_template_language: cdktf.stringToTerraform(this._defaultTemplateLanguage),
      description: cdktf.stringToTerraform(this._description),
      disable_session_renewal: cdktf.booleanToTerraform(this._disableSessionRenewal),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      json_response_enabled: cdktf.booleanToTerraform(this._jsonResponseEnabled),
      name: cdktf.stringToTerraform(this._name),
      new_users_per_minute: cdktf.numberToTerraform(this._newUsersPerMinute),
      path: cdktf.stringToTerraform(this._path),
      queue_all: cdktf.booleanToTerraform(this._queueAll),
      queueing_method: cdktf.stringToTerraform(this._queueingMethod),
      queueing_status_code: cdktf.numberToTerraform(this._queueingStatusCode),
      session_duration: cdktf.numberToTerraform(this._sessionDuration),
      suspended: cdktf.booleanToTerraform(this._suspended),
      total_active_users: cdktf.numberToTerraform(this._totalActiveUsers),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      additional_routes: cdktf.listMapper(waitingRoomAdditionalRoutesToTerraform, true)(this._additionalRoutes.internalValue),
      timeouts: waitingRoomTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
