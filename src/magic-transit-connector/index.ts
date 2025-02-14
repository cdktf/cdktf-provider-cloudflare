// https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/magic_transit_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MagicTransitConnectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/magic_transit_connector#account_id MagicTransitConnector#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/magic_transit_connector#activated MagicTransitConnector#activated}
  */
  readonly activated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/magic_transit_connector#connector_id MagicTransitConnector#connector_id}
  */
  readonly connectorId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/magic_transit_connector#interrupt_window_duration_hours MagicTransitConnector#interrupt_window_duration_hours}
  */
  readonly interruptWindowDurationHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/magic_transit_connector#interrupt_window_hour_of_day MagicTransitConnector#interrupt_window_hour_of_day}
  */
  readonly interruptWindowHourOfDay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/magic_transit_connector#notes MagicTransitConnector#notes}
  */
  readonly notes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/magic_transit_connector#timezone MagicTransitConnector#timezone}
  */
  readonly timezone?: string;
}
export interface MagicTransitConnectorDevice {
}

export function magicTransitConnectorDeviceToTerraform(struct?: MagicTransitConnectorDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function magicTransitConnectorDeviceToHclTerraform(struct?: MagicTransitConnectorDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MagicTransitConnectorDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MagicTransitConnectorDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MagicTransitConnectorDevice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/magic_transit_connector cloudflare_magic_transit_connector}
*/
export class MagicTransitConnector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_magic_transit_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MagicTransitConnector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MagicTransitConnector to import
  * @param importFromId The id of the existing MagicTransitConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/magic_transit_connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MagicTransitConnector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_transit_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/magic_transit_connector cloudflare_magic_transit_connector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MagicTransitConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: MagicTransitConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_magic_transit_connector',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.1.0',
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
    this._accountId = config.accountId;
    this._activated = config.activated;
    this._connectorId = config.connectorId;
    this._interruptWindowDurationHours = config.interruptWindowDurationHours;
    this._interruptWindowHourOfDay = config.interruptWindowHourOfDay;
    this._notes = config.notes;
    this._timezone = config.timezone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // activated - computed: false, optional: true, required: false
  private _activated?: boolean | cdktf.IResolvable; 
  public get activated() {
    return this.getBooleanAttribute('activated');
  }
  public set activated(value: boolean | cdktf.IResolvable) {
    this._activated = value;
  }
  public resetActivated() {
    this._activated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activatedInput() {
    return this._activated;
  }

  // connector_id - computed: false, optional: false, required: true
  private _connectorId?: string; 
  public get connectorId() {
    return this.getStringAttribute('connector_id');
  }
  public set connectorId(value: string) {
    this._connectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorIdInput() {
    return this._connectorId;
  }

  // device - computed: true, optional: false, required: false
  private _device = new MagicTransitConnectorDeviceOutputReference(this, "device");
  public get device() {
    return this._device;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interrupt_window_duration_hours - computed: false, optional: true, required: false
  private _interruptWindowDurationHours?: number; 
  public get interruptWindowDurationHours() {
    return this.getNumberAttribute('interrupt_window_duration_hours');
  }
  public set interruptWindowDurationHours(value: number) {
    this._interruptWindowDurationHours = value;
  }
  public resetInterruptWindowDurationHours() {
    this._interruptWindowDurationHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interruptWindowDurationHoursInput() {
    return this._interruptWindowDurationHours;
  }

  // interrupt_window_hour_of_day - computed: false, optional: true, required: false
  private _interruptWindowHourOfDay?: number; 
  public get interruptWindowHourOfDay() {
    return this.getNumberAttribute('interrupt_window_hour_of_day');
  }
  public set interruptWindowHourOfDay(value: number) {
    this._interruptWindowHourOfDay = value;
  }
  public resetInterruptWindowHourOfDay() {
    this._interruptWindowHourOfDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interruptWindowHourOfDayInput() {
    return this._interruptWindowHourOfDay;
  }

  // last_heartbeat - computed: true, optional: false, required: false
  public get lastHeartbeat() {
    return this.getStringAttribute('last_heartbeat');
  }

  // last_seen_version - computed: true, optional: false, required: false
  public get lastSeenVersion() {
    return this.getStringAttribute('last_seen_version');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // notes - computed: false, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      activated: cdktf.booleanToTerraform(this._activated),
      connector_id: cdktf.stringToTerraform(this._connectorId),
      interrupt_window_duration_hours: cdktf.numberToTerraform(this._interruptWindowDurationHours),
      interrupt_window_hour_of_day: cdktf.numberToTerraform(this._interruptWindowHourOfDay),
      notes: cdktf.stringToTerraform(this._notes),
      timezone: cdktf.stringToTerraform(this._timezone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      activated: {
        value: cdktf.booleanToHclTerraform(this._activated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      connector_id: {
        value: cdktf.stringToHclTerraform(this._connectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interrupt_window_duration_hours: {
        value: cdktf.numberToHclTerraform(this._interruptWindowDurationHours),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      interrupt_window_hour_of_day: {
        value: cdktf.numberToHclTerraform(this._interruptWindowHourOfDay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      notes: {
        value: cdktf.stringToHclTerraform(this._notes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
