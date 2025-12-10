# `dataCloudflareStreamLiveInput` Submodule <a name="`dataCloudflareStreamLiveInput` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareStreamLiveInput <a name="DataCloudflareStreamLiveInput" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/stream_live_input cloudflare_stream_live_input}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarestreamliveinput"

datacloudflarestreamliveinput.NewDataCloudflareStreamLiveInput(scope Construct, id *string, config DataCloudflareStreamLiveInputConfig) DataCloudflareStreamLiveInput
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig">DataCloudflareStreamLiveInputConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig">DataCloudflareStreamLiveInputConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareStreamLiveInput resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarestreamliveinput"

datacloudflarestreamliveinput.DataCloudflareStreamLiveInput_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarestreamliveinput"

datacloudflarestreamliveinput.DataCloudflareStreamLiveInput_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarestreamliveinput"

datacloudflarestreamliveinput.DataCloudflareStreamLiveInput_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarestreamliveinput"

datacloudflarestreamliveinput.DataCloudflareStreamLiveInput_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflareStreamLiveInput resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareStreamLiveInput to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareStreamLiveInput that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/stream_live_input#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareStreamLiveInput to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.deleteRecordingAfterDays">DeleteRecordingAfterDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.meta">Meta</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.modified">Modified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.recording">Recording</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference">DataCloudflareStreamLiveInputRecordingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.rtmps">Rtmps</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference">DataCloudflareStreamLiveInputRtmpsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.rtmpsPlayback">RtmpsPlayback</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference">DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.srt">Srt</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference">DataCloudflareStreamLiveInputSrtOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.srtPlayback">SrtPlayback</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference">DataCloudflareStreamLiveInputSrtPlaybackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.webRtc">WebRtc</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference">DataCloudflareStreamLiveInputWebRtcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.webRtcPlayback">WebRtcPlayback</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference">DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.liveInputIdentifierInput">LiveInputIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.liveInputIdentifier">LiveInputIdentifier</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `DeleteRecordingAfterDays`<sup>Required</sup> <a name="DeleteRecordingAfterDays" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.deleteRecordingAfterDays"></a>

```go
func DeleteRecordingAfterDays() *f64
```

- *Type:* *f64

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.meta"></a>

```go
func Meta() *string
```

- *Type:* *string

---

##### `Modified`<sup>Required</sup> <a name="Modified" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.modified"></a>

```go
func Modified() *string
```

- *Type:* *string

---

##### `Recording`<sup>Required</sup> <a name="Recording" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.recording"></a>

```go
func Recording() DataCloudflareStreamLiveInputRecordingOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference">DataCloudflareStreamLiveInputRecordingOutputReference</a>

---

##### `Rtmps`<sup>Required</sup> <a name="Rtmps" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.rtmps"></a>

```go
func Rtmps() DataCloudflareStreamLiveInputRtmpsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference">DataCloudflareStreamLiveInputRtmpsOutputReference</a>

---

##### `RtmpsPlayback`<sup>Required</sup> <a name="RtmpsPlayback" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.rtmpsPlayback"></a>

```go
func RtmpsPlayback() DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference">DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference</a>

---

##### `Srt`<sup>Required</sup> <a name="Srt" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.srt"></a>

```go
func Srt() DataCloudflareStreamLiveInputSrtOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference">DataCloudflareStreamLiveInputSrtOutputReference</a>

---

##### `SrtPlayback`<sup>Required</sup> <a name="SrtPlayback" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.srtPlayback"></a>

```go
func SrtPlayback() DataCloudflareStreamLiveInputSrtPlaybackOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference">DataCloudflareStreamLiveInputSrtPlaybackOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `WebRtc`<sup>Required</sup> <a name="WebRtc" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.webRtc"></a>

```go
func WebRtc() DataCloudflareStreamLiveInputWebRtcOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference">DataCloudflareStreamLiveInputWebRtcOutputReference</a>

---

##### `WebRtcPlayback`<sup>Required</sup> <a name="WebRtcPlayback" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.webRtcPlayback"></a>

```go
func WebRtcPlayback() DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference">DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `LiveInputIdentifierInput`<sup>Optional</sup> <a name="LiveInputIdentifierInput" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.liveInputIdentifierInput"></a>

```go
func LiveInputIdentifierInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `LiveInputIdentifier`<sup>Required</sup> <a name="LiveInputIdentifier" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.liveInputIdentifier"></a>

```go
func LiveInputIdentifier() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInput.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareStreamLiveInputConfig <a name="DataCloudflareStreamLiveInputConfig" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarestreamliveinput"

&datacloudflarestreamliveinput.DataCloudflareStreamLiveInputConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	LiveInputIdentifier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.liveInputIdentifier">LiveInputIdentifier</a></code> | <code>*string</code> | A unique identifier for a live input. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/stream_live_input#account_id DataCloudflareStreamLiveInput#account_id}

---

##### `LiveInputIdentifier`<sup>Required</sup> <a name="LiveInputIdentifier" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputConfig.property.liveInputIdentifier"></a>

```go
LiveInputIdentifier *string
```

- *Type:* *string

A unique identifier for a live input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/stream_live_input#live_input_identifier DataCloudflareStreamLiveInput#live_input_identifier}

---

### DataCloudflareStreamLiveInputRecording <a name="DataCloudflareStreamLiveInputRecording" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecording"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecording.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarestreamliveinput"

&datacloudflarestreamliveinput.DataCloudflareStreamLiveInputRecording {

}
```


### DataCloudflareStreamLiveInputRtmps <a name="DataCloudflareStreamLiveInputRtmps" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmps.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarestreamliveinput"

&datacloudflarestreamliveinput.DataCloudflareStreamLiveInputRtmps {

}
```


### DataCloudflareStreamLiveInputRtmpsPlayback <a name="DataCloudflareStreamLiveInputRtmpsPlayback" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlayback"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlayback.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarestreamliveinput"

&datacloudflarestreamliveinput.DataCloudflareStreamLiveInputRtmpsPlayback {

}
```


### DataCloudflareStreamLiveInputSrt <a name="DataCloudflareStreamLiveInputSrt" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrt.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarestreamliveinput"

&datacloudflarestreamliveinput.DataCloudflareStreamLiveInputSrt {

}
```


### DataCloudflareStreamLiveInputSrtPlayback <a name="DataCloudflareStreamLiveInputSrtPlayback" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlayback"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlayback.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarestreamliveinput"

&datacloudflarestreamliveinput.DataCloudflareStreamLiveInputSrtPlayback {

}
```


### DataCloudflareStreamLiveInputWebRtc <a name="DataCloudflareStreamLiveInputWebRtc" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtc.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarestreamliveinput"

&datacloudflarestreamliveinput.DataCloudflareStreamLiveInputWebRtc {

}
```


### DataCloudflareStreamLiveInputWebRtcPlayback <a name="DataCloudflareStreamLiveInputWebRtcPlayback" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlayback"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlayback.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarestreamliveinput"

&datacloudflarestreamliveinput.DataCloudflareStreamLiveInputWebRtcPlayback {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareStreamLiveInputRecordingOutputReference <a name="DataCloudflareStreamLiveInputRecordingOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarestreamliveinput"

datacloudflarestreamliveinput.NewDataCloudflareStreamLiveInputRecordingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareStreamLiveInputRecordingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.property.allowedOrigins">AllowedOrigins</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.property.hideLiveViewerCount">HideLiveViewerCount</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.property.requireSignedUrls">RequireSignedUrls</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecording">DataCloudflareStreamLiveInputRecording</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.property.allowedOrigins"></a>

```go
func AllowedOrigins() *[]*string
```

- *Type:* *[]*string

---

##### `HideLiveViewerCount`<sup>Required</sup> <a name="HideLiveViewerCount" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.property.hideLiveViewerCount"></a>

```go
func HideLiveViewerCount() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `RequireSignedUrls`<sup>Required</sup> <a name="RequireSignedUrls" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.property.requireSignedUrls"></a>

```go
func RequireSignedUrls() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `TimeoutSeconds`<sup>Required</sup> <a name="TimeoutSeconds" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.property.timeoutSeconds"></a>

```go
func TimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecordingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareStreamLiveInputRecording
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRecording">DataCloudflareStreamLiveInputRecording</a>

---


### DataCloudflareStreamLiveInputRtmpsOutputReference <a name="DataCloudflareStreamLiveInputRtmpsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarestreamliveinput"

datacloudflarestreamliveinput.NewDataCloudflareStreamLiveInputRtmpsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareStreamLiveInputRtmpsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.property.streamKey">StreamKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmps">DataCloudflareStreamLiveInputRtmps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StreamKey`<sup>Required</sup> <a name="StreamKey" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.property.streamKey"></a>

```go
func StreamKey() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareStreamLiveInputRtmps
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmps">DataCloudflareStreamLiveInputRtmps</a>

---


### DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference <a name="DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarestreamliveinput"

datacloudflarestreamliveinput.NewDataCloudflareStreamLiveInputRtmpsPlaybackOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.property.streamKey">StreamKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlayback">DataCloudflareStreamLiveInputRtmpsPlayback</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StreamKey`<sup>Required</sup> <a name="StreamKey" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.property.streamKey"></a>

```go
func StreamKey() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareStreamLiveInputRtmpsPlayback
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputRtmpsPlayback">DataCloudflareStreamLiveInputRtmpsPlayback</a>

---


### DataCloudflareStreamLiveInputSrtOutputReference <a name="DataCloudflareStreamLiveInputSrtOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarestreamliveinput"

datacloudflarestreamliveinput.NewDataCloudflareStreamLiveInputSrtOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareStreamLiveInputSrtOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.property.passphrase">Passphrase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.property.streamId">StreamId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrt">DataCloudflareStreamLiveInputSrt</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Passphrase`<sup>Required</sup> <a name="Passphrase" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.property.passphrase"></a>

```go
func Passphrase() *string
```

- *Type:* *string

---

##### `StreamId`<sup>Required</sup> <a name="StreamId" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.property.streamId"></a>

```go
func StreamId() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareStreamLiveInputSrt
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrt">DataCloudflareStreamLiveInputSrt</a>

---


### DataCloudflareStreamLiveInputSrtPlaybackOutputReference <a name="DataCloudflareStreamLiveInputSrtPlaybackOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarestreamliveinput"

datacloudflarestreamliveinput.NewDataCloudflareStreamLiveInputSrtPlaybackOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareStreamLiveInputSrtPlaybackOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.property.passphrase">Passphrase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.property.streamId">StreamId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlayback">DataCloudflareStreamLiveInputSrtPlayback</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Passphrase`<sup>Required</sup> <a name="Passphrase" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.property.passphrase"></a>

```go
func Passphrase() *string
```

- *Type:* *string

---

##### `StreamId`<sup>Required</sup> <a name="StreamId" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.property.streamId"></a>

```go
func StreamId() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlaybackOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareStreamLiveInputSrtPlayback
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputSrtPlayback">DataCloudflareStreamLiveInputSrtPlayback</a>

---


### DataCloudflareStreamLiveInputWebRtcOutputReference <a name="DataCloudflareStreamLiveInputWebRtcOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarestreamliveinput"

datacloudflarestreamliveinput.NewDataCloudflareStreamLiveInputWebRtcOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareStreamLiveInputWebRtcOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtc">DataCloudflareStreamLiveInputWebRtc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareStreamLiveInputWebRtc
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtc">DataCloudflareStreamLiveInputWebRtc</a>

---


### DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference <a name="DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarestreamliveinput"

datacloudflarestreamliveinput.NewDataCloudflareStreamLiveInputWebRtcPlaybackOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlayback">DataCloudflareStreamLiveInputWebRtcPlayback</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareStreamLiveInputWebRtcPlayback
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareStreamLiveInput.DataCloudflareStreamLiveInputWebRtcPlayback">DataCloudflareStreamLiveInputWebRtcPlayback</a>

---



