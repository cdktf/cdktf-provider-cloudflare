# `cloudflare_device_managed_networks`

Refer to the Terraform Registory for docs: [`cloudflare_device_managed_networks`](https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/device_managed_networks).

# `deviceManagedNetworks` Submodule <a name="`deviceManagedNetworks` Submodule" id="@cdktf/provider-cloudflare.deviceManagedNetworks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DeviceManagedNetworks <a name="DeviceManagedNetworks" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/device_managed_networks cloudflare_device_managed_networks}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/devicemanagednetworks"

devicemanagednetworks.NewDeviceManagedNetworks(scope Construct, id *string, config DeviceManagedNetworksConfig) DeviceManagedNetworks
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfig">DeviceManagedNetworksConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfig">DeviceManagedNetworksConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.putConfig"></a>

```go
func PutConfig(value DeviceManagedNetworksConfigA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigA">DeviceManagedNetworksConfigA</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DeviceManagedNetworks resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/devicemanagednetworks"

devicemanagednetworks.DeviceManagedNetworks_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/devicemanagednetworks"

devicemanagednetworks.DeviceManagedNetworks_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/devicemanagednetworks"

devicemanagednetworks.DeviceManagedNetworks_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/devicemanagednetworks"

devicemanagednetworks.DeviceManagedNetworks_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DeviceManagedNetworks resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DeviceManagedNetworks to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DeviceManagedNetworks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/device_managed_networks#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DeviceManagedNetworks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.property.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference">DeviceManagedNetworksConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigA">DeviceManagedNetworksConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.property.config"></a>

```go
func Config() DeviceManagedNetworksConfigAOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference">DeviceManagedNetworksConfigAOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.property.configInput"></a>

```go
func ConfigInput() DeviceManagedNetworksConfigA
```

- *Type:* <a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigA">DeviceManagedNetworksConfigA</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworks.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DeviceManagedNetworksConfig <a name="DeviceManagedNetworksConfig" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/devicemanagednetworks"

&devicemanagednetworks.DeviceManagedNetworksConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Config: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigA,
	Name: *string,
	Type: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfig.property.accountId">AccountId</a></code> | <code>*string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfig.property.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigA">DeviceManagedNetworksConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfig.property.name">Name</a></code> | <code>*string</code> | The name of the Device Managed Network. Must be unique. |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfig.property.type">Type</a></code> | <code>*string</code> | The type of Device Managed Network. Available values: `tls`. |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/device_managed_networks#id DeviceManagedNetworks#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/device_managed_networks#account_id DeviceManagedNetworks#account_id}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfig.property.config"></a>

```go
Config DeviceManagedNetworksConfigA
```

- *Type:* <a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigA">DeviceManagedNetworksConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/device_managed_networks#config DeviceManagedNetworks#config}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the Device Managed Network. Must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/device_managed_networks#name DeviceManagedNetworks#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of Device Managed Network. Available values: `tls`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/device_managed_networks#type DeviceManagedNetworks#type}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/device_managed_networks#id DeviceManagedNetworks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DeviceManagedNetworksConfigA <a name="DeviceManagedNetworksConfigA" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/devicemanagednetworks"

&devicemanagednetworks.DeviceManagedNetworksConfigA {
	Sha256: *string,
	TlsSockaddr: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigA.property.sha256">Sha256</a></code> | <code>*string</code> | The SHA-256 hash of the TLS certificate presented by the host found at tls_sockaddr. |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigA.property.tlsSockaddr">TlsSockaddr</a></code> | <code>*string</code> | A network address of the form "host:port" that the WARP client will use to detect the presence of a TLS host. |

---

##### `Sha256`<sup>Required</sup> <a name="Sha256" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigA.property.sha256"></a>

```go
Sha256 *string
```

- *Type:* *string

The SHA-256 hash of the TLS certificate presented by the host found at tls_sockaddr.

If absent, regular certificate verification (trusted roots, valid timestamp, etc) will be used to validate the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/device_managed_networks#sha256 DeviceManagedNetworks#sha256}

---

##### `TlsSockaddr`<sup>Required</sup> <a name="TlsSockaddr" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigA.property.tlsSockaddr"></a>

```go
TlsSockaddr *string
```

- *Type:* *string

A network address of the form "host:port" that the WARP client will use to detect the presence of a TLS host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/device_managed_networks#tls_sockaddr DeviceManagedNetworks#tls_sockaddr}

---

## Classes <a name="Classes" id="Classes"></a>

### DeviceManagedNetworksConfigAOutputReference <a name="DeviceManagedNetworksConfigAOutputReference" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/devicemanagednetworks"

devicemanagednetworks.NewDeviceManagedNetworksConfigAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DeviceManagedNetworksConfigAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.property.sha256Input">Sha256Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.property.tlsSockaddrInput">TlsSockaddrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.property.sha256">Sha256</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.property.tlsSockaddr">TlsSockaddr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigA">DeviceManagedNetworksConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Sha256Input`<sup>Optional</sup> <a name="Sha256Input" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.property.sha256Input"></a>

```go
func Sha256Input() *string
```

- *Type:* *string

---

##### `TlsSockaddrInput`<sup>Optional</sup> <a name="TlsSockaddrInput" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.property.tlsSockaddrInput"></a>

```go
func TlsSockaddrInput() *string
```

- *Type:* *string

---

##### `Sha256`<sup>Required</sup> <a name="Sha256" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.property.sha256"></a>

```go
func Sha256() *string
```

- *Type:* *string

---

##### `TlsSockaddr`<sup>Required</sup> <a name="TlsSockaddr" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.property.tlsSockaddr"></a>

```go
func TlsSockaddr() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigAOutputReference.property.internalValue"></a>

```go
func InternalValue() DeviceManagedNetworksConfigA
```

- *Type:* <a href="#@cdktf/provider-cloudflare.deviceManagedNetworks.DeviceManagedNetworksConfigA">DeviceManagedNetworksConfigA</a>

---



