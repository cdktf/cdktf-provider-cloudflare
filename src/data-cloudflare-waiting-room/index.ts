/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/waiting_room
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareWaitingRoomConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/waiting_room#waiting_room_id DataCloudflareWaitingRoom#waiting_room_id}
  */
  readonly waitingRoomId?: string;
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/waiting_room#zone_id DataCloudflareWaitingRoom#zone_id}
  */
  readonly zoneId: string;
}
export interface DataCloudflareWaitingRoomAdditionalRoutes {
}

export function dataCloudflareWaitingRoomAdditionalRoutesToTerraform(struct?: DataCloudflareWaitingRoomAdditionalRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareWaitingRoomAdditionalRoutesToHclTerraform(struct?: DataCloudflareWaitingRoomAdditionalRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareWaitingRoomAdditionalRoutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCloudflareWaitingRoomAdditionalRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareWaitingRoomAdditionalRoutes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataCloudflareWaitingRoomAdditionalRoutesList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareWaitingRoomAdditionalRoutesOutputReference {
    return new DataCloudflareWaitingRoomAdditionalRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareWaitingRoomCookieAttributes {
}

export function dataCloudflareWaitingRoomCookieAttributesToTerraform(struct?: DataCloudflareWaitingRoomCookieAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareWaitingRoomCookieAttributesToHclTerraform(struct?: DataCloudflareWaitingRoomCookieAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareWaitingRoomCookieAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareWaitingRoomCookieAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareWaitingRoomCookieAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // samesite - computed: true, optional: false, required: false
  public get samesite() {
    return this.getStringAttribute('samesite');
  }

  // secure - computed: true, optional: false, required: false
  public get secure() {
    return this.getStringAttribute('secure');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/waiting_room cloudflare_waiting_room}
*/
export class DataCloudflareWaitingRoom extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_waiting_room";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareWaitingRoom resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareWaitingRoom to import
  * @param importFromId The id of the existing DataCloudflareWaitingRoom that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/waiting_room#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareWaitingRoom to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_waiting_room", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/waiting_room cloudflare_waiting_room} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareWaitingRoomConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareWaitingRoomConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_waiting_room',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.11.0',
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
    this._waitingRoomId = config.waitingRoomId;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_routes - computed: true, optional: false, required: false
  private _additionalRoutes = new DataCloudflareWaitingRoomAdditionalRoutesList(this, "additional_routes", false);
  public get additionalRoutes() {
    return this._additionalRoutes;
  }

  // cookie_attributes - computed: true, optional: false, required: false
  private _cookieAttributes = new DataCloudflareWaitingRoomCookieAttributesOutputReference(this, "cookie_attributes");
  public get cookieAttributes() {
    return this._cookieAttributes;
  }

  // cookie_suffix - computed: true, optional: false, required: false
  public get cookieSuffix() {
    return this.getStringAttribute('cookie_suffix');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // custom_page_html - computed: true, optional: false, required: false
  public get customPageHtml() {
    return this.getStringAttribute('custom_page_html');
  }

  // default_template_language - computed: true, optional: false, required: false
  public get defaultTemplateLanguage() {
    return this.getStringAttribute('default_template_language');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disable_session_renewal - computed: true, optional: false, required: false
  public get disableSessionRenewal() {
    return this.getBooleanAttribute('disable_session_renewal');
  }

  // enabled_origin_commands - computed: true, optional: false, required: false
  public get enabledOriginCommands() {
    return this.getListAttribute('enabled_origin_commands');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // json_response_enabled - computed: true, optional: false, required: false
  public get jsonResponseEnabled() {
    return this.getBooleanAttribute('json_response_enabled');
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // new_users_per_minute - computed: true, optional: false, required: false
  public get newUsersPerMinute() {
    return this.getNumberAttribute('new_users_per_minute');
  }

  // next_event_prequeue_start_time - computed: true, optional: false, required: false
  public get nextEventPrequeueStartTime() {
    return this.getStringAttribute('next_event_prequeue_start_time');
  }

  // next_event_start_time - computed: true, optional: false, required: false
  public get nextEventStartTime() {
    return this.getStringAttribute('next_event_start_time');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // queue_all - computed: true, optional: false, required: false
  public get queueAll() {
    return this.getBooleanAttribute('queue_all');
  }

  // queueing_method - computed: true, optional: false, required: false
  public get queueingMethod() {
    return this.getStringAttribute('queueing_method');
  }

  // queueing_status_code - computed: true, optional: false, required: false
  public get queueingStatusCode() {
    return this.getNumberAttribute('queueing_status_code');
  }

  // session_duration - computed: true, optional: false, required: false
  public get sessionDuration() {
    return this.getNumberAttribute('session_duration');
  }

  // suspended - computed: true, optional: false, required: false
  public get suspended() {
    return this.getBooleanAttribute('suspended');
  }

  // total_active_users - computed: true, optional: false, required: false
  public get totalActiveUsers() {
    return this.getNumberAttribute('total_active_users');
  }

  // turnstile_action - computed: true, optional: false, required: false
  public get turnstileAction() {
    return this.getStringAttribute('turnstile_action');
  }

  // turnstile_mode - computed: true, optional: false, required: false
  public get turnstileMode() {
    return this.getStringAttribute('turnstile_mode');
  }

  // waiting_room_id - computed: false, optional: true, required: false
  private _waitingRoomId?: string; 
  public get waitingRoomId() {
    return this.getStringAttribute('waiting_room_id');
  }
  public set waitingRoomId(value: string) {
    this._waitingRoomId = value;
  }
  public resetWaitingRoomId() {
    this._waitingRoomId = undefined;
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
      waiting_room_id: cdktf.stringToTerraform(this._waitingRoomId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
