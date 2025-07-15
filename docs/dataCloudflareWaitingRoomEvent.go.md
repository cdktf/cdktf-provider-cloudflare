# `dataCloudflareWaitingRoomEvent` Submodule <a name="`dataCloudflareWaitingRoomEvent` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareWaitingRoomEvent <a name="DataCloudflareWaitingRoomEvent" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/waiting_room_event cloudflare_waiting_room_event}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarewaitingroomevent"

datacloudflarewaitingroomevent.NewDataCloudflareWaitingRoomEvent(scope Construct, id *string, config DataCloudflareWaitingRoomEventConfig) DataCloudflareWaitingRoomEvent
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig">DataCloudflareWaitingRoomEventConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig">DataCloudflareWaitingRoomEventConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.resetEventId">ResetEventId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetEventId` <a name="ResetEventId" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.resetEventId"></a>

```go
func ResetEventId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareWaitingRoomEvent resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarewaitingroomevent"

datacloudflarewaitingroomevent.DataCloudflareWaitingRoomEvent_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarewaitingroomevent"

datacloudflarewaitingroomevent.DataCloudflareWaitingRoomEvent_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarewaitingroomevent"

datacloudflarewaitingroomevent.DataCloudflareWaitingRoomEvent_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarewaitingroomevent"

datacloudflarewaitingroomevent.DataCloudflareWaitingRoomEvent_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflareWaitingRoomEvent resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareWaitingRoomEvent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareWaitingRoomEvent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/waiting_room_event#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareWaitingRoomEvent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.customPageHtml">CustomPageHtml</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.disableSessionRenewal">DisableSessionRenewal</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.eventEndTime">EventEndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.eventStartTime">EventStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.modifiedOn">ModifiedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.newUsersPerMinute">NewUsersPerMinute</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.prequeueStartTime">PrequeueStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.queueingMethod">QueueingMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.sessionDuration">SessionDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.shuffleAtEventStart">ShuffleAtEventStart</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.suspended">Suspended</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.totalActiveUsers">TotalActiveUsers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.turnstileAction">TurnstileAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.turnstileMode">TurnstileMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.eventIdInput">EventIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.waitingRoomIdInput">WaitingRoomIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.eventId">EventId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.waitingRoomId">WaitingRoomId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `CustomPageHtml`<sup>Required</sup> <a name="CustomPageHtml" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.customPageHtml"></a>

```go
func CustomPageHtml() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisableSessionRenewal`<sup>Required</sup> <a name="DisableSessionRenewal" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.disableSessionRenewal"></a>

```go
func DisableSessionRenewal() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EventEndTime`<sup>Required</sup> <a name="EventEndTime" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.eventEndTime"></a>

```go
func EventEndTime() *string
```

- *Type:* *string

---

##### `EventStartTime`<sup>Required</sup> <a name="EventStartTime" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.eventStartTime"></a>

```go
func EventStartTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.modifiedOn"></a>

```go
func ModifiedOn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NewUsersPerMinute`<sup>Required</sup> <a name="NewUsersPerMinute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.newUsersPerMinute"></a>

```go
func NewUsersPerMinute() *f64
```

- *Type:* *f64

---

##### `PrequeueStartTime`<sup>Required</sup> <a name="PrequeueStartTime" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.prequeueStartTime"></a>

```go
func PrequeueStartTime() *string
```

- *Type:* *string

---

##### `QueueingMethod`<sup>Required</sup> <a name="QueueingMethod" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.queueingMethod"></a>

```go
func QueueingMethod() *string
```

- *Type:* *string

---

##### `SessionDuration`<sup>Required</sup> <a name="SessionDuration" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.sessionDuration"></a>

```go
func SessionDuration() *f64
```

- *Type:* *f64

---

##### `ShuffleAtEventStart`<sup>Required</sup> <a name="ShuffleAtEventStart" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.shuffleAtEventStart"></a>

```go
func ShuffleAtEventStart() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Suspended`<sup>Required</sup> <a name="Suspended" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.suspended"></a>

```go
func Suspended() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `TotalActiveUsers`<sup>Required</sup> <a name="TotalActiveUsers" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.totalActiveUsers"></a>

```go
func TotalActiveUsers() *f64
```

- *Type:* *f64

---

##### `TurnstileAction`<sup>Required</sup> <a name="TurnstileAction" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.turnstileAction"></a>

```go
func TurnstileAction() *string
```

- *Type:* *string

---

##### `TurnstileMode`<sup>Required</sup> <a name="TurnstileMode" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.turnstileMode"></a>

```go
func TurnstileMode() *string
```

- *Type:* *string

---

##### `EventIdInput`<sup>Optional</sup> <a name="EventIdInput" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.eventIdInput"></a>

```go
func EventIdInput() *string
```

- *Type:* *string

---

##### `WaitingRoomIdInput`<sup>Optional</sup> <a name="WaitingRoomIdInput" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.waitingRoomIdInput"></a>

```go
func WaitingRoomIdInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `EventId`<sup>Required</sup> <a name="EventId" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.eventId"></a>

```go
func EventId() *string
```

- *Type:* *string

---

##### `WaitingRoomId`<sup>Required</sup> <a name="WaitingRoomId" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.waitingRoomId"></a>

```go
func WaitingRoomId() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareWaitingRoomEventConfig <a name="DataCloudflareWaitingRoomEventConfig" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarewaitingroomevent"

&datacloudflarewaitingroomevent.DataCloudflareWaitingRoomEventConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	WaitingRoomId: *string,
	ZoneId: *string,
	EventId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.waitingRoomId">WaitingRoomId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/waiting_room_event#waiting_room_id DataCloudflareWaitingRoomEvent#waiting_room_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.eventId">EventId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/waiting_room_event#event_id DataCloudflareWaitingRoomEvent#event_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `WaitingRoomId`<sup>Required</sup> <a name="WaitingRoomId" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.waitingRoomId"></a>

```go
WaitingRoomId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/waiting_room_event#waiting_room_id DataCloudflareWaitingRoomEvent#waiting_room_id}.

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/waiting_room_event#zone_id DataCloudflareWaitingRoomEvent#zone_id}

---

##### `EventId`<sup>Optional</sup> <a name="EventId" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.eventId"></a>

```go
EventId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/waiting_room_event#event_id DataCloudflareWaitingRoomEvent#event_id}.

---



