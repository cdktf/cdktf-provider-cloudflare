/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/observatory_scheduled_test
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObservatoryScheduledTestConfig extends cdktf.TerraformMetaArguments {
  /**
  * The frequency to run the test. Available values: `DAILY`, `WEEKLY`. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/observatory_scheduled_test#frequency ObservatoryScheduledTest#frequency}
  */
  readonly frequency: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/observatory_scheduled_test#id ObservatoryScheduledTest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The region to run the test in. Available values: `us-central1`, `us-east1`, `us-east4`, `us-south1`, `us-west1`, `southamerica-east1`, `europe-north1`, `europe-southwest1`, `europe-west1`, `europe-west2`, `europe-west3`, `europe-west4`, `europe-west8`, `europe-west9`, `asia-east1`, `asia-southeast1`, `me-west1`, `australia-southeast1`. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/observatory_scheduled_test#region ObservatoryScheduledTest#region}
  */
  readonly region: string;
  /**
  * The page to run the test on. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/observatory_scheduled_test#url ObservatoryScheduledTest#url}
  */
  readonly url: string;
  /**
  * The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/observatory_scheduled_test#zone_id ObservatoryScheduledTest#zone_id}
  */
  readonly zoneId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/observatory_scheduled_test#timeouts ObservatoryScheduledTest#timeouts}
  */
  readonly timeouts?: ObservatoryScheduledTestTimeouts;
}
export interface ObservatoryScheduledTestTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/observatory_scheduled_test#create ObservatoryScheduledTest#create}
  */
  readonly create?: string;
}

export function observatoryScheduledTestTimeoutsToTerraform(struct?: ObservatoryScheduledTestTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}

export class ObservatoryScheduledTestTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservatoryScheduledTestTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservatoryScheduledTestTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/observatory_scheduled_test cloudflare_observatory_scheduled_test}
*/
export class ObservatoryScheduledTest extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_observatory_scheduled_test";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObservatoryScheduledTest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObservatoryScheduledTest to import
  * @param importFromId The id of the existing ObservatoryScheduledTest that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/observatory_scheduled_test#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObservatoryScheduledTest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_observatory_scheduled_test", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/observatory_scheduled_test cloudflare_observatory_scheduled_test} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObservatoryScheduledTestConfig
  */
  public constructor(scope: Construct, id: string, config: ObservatoryScheduledTestConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_observatory_scheduled_test',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '4.17.0',
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
    this._frequency = config.frequency;
    this._id = config.id;
    this._region = config.region;
    this._url = config.url;
    this._zoneId = config.zoneId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // frequency - computed: false, optional: false, required: true
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
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

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ObservatoryScheduledTestTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ObservatoryScheduledTestTimeouts) {
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
      frequency: cdktf.stringToTerraform(this._frequency),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      url: cdktf.stringToTerraform(this._url),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      timeouts: observatoryScheduledTestTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
