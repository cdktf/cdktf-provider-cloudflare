// https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/waiting_room_events
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareWaitingRoomEventsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Max items to fetch, default: 1000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/waiting_room_events#max_items DataCloudflareWaitingRoomEvents#max_items}
  */
  readonly maxItems?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/waiting_room_events#waiting_room_id DataCloudflareWaitingRoomEvents#waiting_room_id}
  */
  readonly waitingRoomId: string;
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/waiting_room_events#zone_id DataCloudflareWaitingRoomEvents#zone_id}
  */
  readonly zoneId: string;
}
export interface DataCloudflareWaitingRoomEventsResult {
}

export function dataCloudflareWaitingRoomEventsResultToTerraform(struct?: DataCloudflareWaitingRoomEventsResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareWaitingRoomEventsResultToHclTerraform(struct?: DataCloudflareWaitingRoomEventsResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareWaitingRoomEventsResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareWaitingRoomEventsResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareWaitingRoomEventsResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // custom_page_html - computed: true, optional: false, required: false
  public get customPageHtml() {
    return this.getStringAttribute('custom_page_html');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disable_session_renewal - computed: true, optional: false, required: false
  public get disableSessionRenewal() {
    return this.getBooleanAttribute('disable_session_renewal');
  }

  // event_end_time - computed: true, optional: false, required: false
  public get eventEndTime() {
    return this.getStringAttribute('event_end_time');
  }

  // event_start_time - computed: true, optional: false, required: false
  public get eventStartTime() {
    return this.getStringAttribute('event_start_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // prequeue_start_time - computed: true, optional: false, required: false
  public get prequeueStartTime() {
    return this.getStringAttribute('prequeue_start_time');
  }

  // queueing_method - computed: true, optional: false, required: false
  public get queueingMethod() {
    return this.getStringAttribute('queueing_method');
  }

  // session_duration - computed: true, optional: false, required: false
  public get sessionDuration() {
    return this.getNumberAttribute('session_duration');
  }

  // shuffle_at_event_start - computed: true, optional: false, required: false
  public get shuffleAtEventStart() {
    return this.getBooleanAttribute('shuffle_at_event_start');
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
}

export class DataCloudflareWaitingRoomEventsResultList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareWaitingRoomEventsResultOutputReference {
    return new DataCloudflareWaitingRoomEventsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/waiting_room_events cloudflare_waiting_room_events}
*/
export class DataCloudflareWaitingRoomEvents extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_waiting_room_events";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareWaitingRoomEvents resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareWaitingRoomEvents to import
  * @param importFromId The id of the existing DataCloudflareWaitingRoomEvents that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/waiting_room_events#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareWaitingRoomEvents to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_waiting_room_events", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/waiting_room_events cloudflare_waiting_room_events} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareWaitingRoomEventsConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareWaitingRoomEventsConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_waiting_room_events',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.4.0',
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
    this._maxItems = config.maxItems;
    this._waitingRoomId = config.waitingRoomId;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // max_items - computed: false, optional: true, required: false
  private _maxItems?: number; 
  public get maxItems() {
    return this.getNumberAttribute('max_items');
  }
  public set maxItems(value: number) {
    this._maxItems = value;
  }
  public resetMaxItems() {
    this._maxItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxItemsInput() {
    return this._maxItems;
  }

  // result - computed: true, optional: false, required: false
  private _result = new DataCloudflareWaitingRoomEventsResultList(this, "result", false);
  public get result() {
    return this._result;
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
      max_items: cdktf.numberToTerraform(this._maxItems),
      waiting_room_id: cdktf.stringToTerraform(this._waitingRoomId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      max_items: {
        value: cdktf.numberToHclTerraform(this._maxItems),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
