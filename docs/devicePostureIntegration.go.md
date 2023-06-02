# `cloudflare_device_posture_integration`

Refer to the Terraform Registory for docs: [`cloudflare_device_posture_integration`](https://registry.terraform.io/providers/cloudflare/cloudflare/4.7.1/docs/resources/device_posture_integration).

# `devicePostureIntegration` Submodule <a name="`devicePostureIntegration` Submodule" id="@cdktf/provider-cloudflare.devicePostureIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevicePostureIntegration <a name="DevicePostureIntegration" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.7.1/docs/resources/device_posture_integration cloudflare_device_posture_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v6/devicepostureintegration"

devicepostureintegration.NewDevicePostureIntegration(scope Construct, id *string, config DevicePostureIntegrationConfig) DevicePostureIntegration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig">DevicePostureIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig">DevicePostureIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.resetIdentifier">ResetIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.resetInterval">ResetInterval</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.putConfig"></a>

```go
func PutConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.putConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.resetConfig"></a>

```go
func ResetConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentifier` <a name="ResetIdentifier" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.resetIdentifier"></a>

```go
func ResetIdentifier()
```

##### `ResetInterval` <a name="ResetInterval" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.resetInterval"></a>

```go
func ResetInterval()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v6/devicepostureintegration"

devicepostureintegration.DevicePostureIntegration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v6/devicepostureintegration"

devicepostureintegration.DevicePostureIntegration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v6/devicepostureintegration"

devicepostureintegration.DevicePostureIntegration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList">DevicePostureIntegrationConfigAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.configInput">ConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.identifierInput">IdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.intervalInput">IntervalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.interval">Interval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.config"></a>

```go
func Config() DevicePostureIntegrationConfigAList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList">DevicePostureIntegrationConfigAList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.configInput"></a>

```go
func ConfigInput() interface{}
```

- *Type:* interface{}

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.identifierInput"></a>

```go
func IdentifierInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.intervalInput"></a>

```go
func IntervalInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.interval"></a>

```go
func Interval() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DevicePostureIntegrationConfig <a name="DevicePostureIntegrationConfig" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v6/devicepostureintegration"

&devicepostureintegration.DevicePostureIntegrationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Name: *string,
	Type: *string,
	Config: interface{},
	Id: *string,
	Identifier: *string,
	Interval: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.accountId">AccountId</a></code> | <code>*string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.name">Name</a></code> | <code>*string</code> | Name of the device posture integration. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.type">Type</a></code> | <code>*string</code> | The device posture integration type. Available values: `workspace_one`, `uptycs`, `crowdstrike_s2s`, `intune`, `kolide`. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.config">Config</a></code> | <code>interface{}</code> | config block. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.7.1/docs/resources/device_posture_integration#id DevicePostureIntegration#id}. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.identifier">Identifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.7.1/docs/resources/device_posture_integration#identifier DevicePostureIntegration#identifier}. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.interval">Interval</a></code> | <code>*string</code> | Indicates the frequency with which to poll the third-party API. Must be in the format `1h` or `30m`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.7.1/docs/resources/device_posture_integration#account_id DevicePostureIntegration#account_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the device posture integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.7.1/docs/resources/device_posture_integration#name DevicePostureIntegration#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The device posture integration type. Available values: `workspace_one`, `uptycs`, `crowdstrike_s2s`, `intune`, `kolide`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.7.1/docs/resources/device_posture_integration#type DevicePostureIntegration#type}

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.config"></a>

```go
Config interface{}
```

- *Type:* interface{}

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.7.1/docs/resources/device_posture_integration#config DevicePostureIntegration#config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.7.1/docs/resources/device_posture_integration#id DevicePostureIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identifier`<sup>Optional</sup> <a name="Identifier" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.identifier"></a>

```go
Identifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.7.1/docs/resources/device_posture_integration#identifier DevicePostureIntegration#identifier}.

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfig.property.interval"></a>

```go
Interval *string
```

- *Type:* *string

Indicates the frequency with which to poll the third-party API. Must be in the format `1h` or `30m`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.7.1/docs/resources/device_posture_integration#interval DevicePostureIntegration#interval}

---

### DevicePostureIntegrationConfigA <a name="DevicePostureIntegrationConfigA" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v6/devicepostureintegration"

&devicepostureintegration.DevicePostureIntegrationConfigA {
	ApiUrl: *string,
	AuthUrl: *string,
	ClientId: *string,
	ClientKey: *string,
	ClientSecret: *string,
	CustomerId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA.property.apiUrl">ApiUrl</a></code> | <code>*string</code> | The third-party API's URL. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA.property.authUrl">AuthUrl</a></code> | <code>*string</code> | The third-party authorization API URL. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA.property.clientId">ClientId</a></code> | <code>*string</code> | The client identifier for authenticating API calls. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA.property.clientKey">ClientKey</a></code> | <code>*string</code> | The client key for authenticating API calls. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | The client secret for authenticating API calls. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA.property.customerId">CustomerId</a></code> | <code>*string</code> | The customer identifier for authenticating API calls. |

---

##### `ApiUrl`<sup>Optional</sup> <a name="ApiUrl" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA.property.apiUrl"></a>

```go
ApiUrl *string
```

- *Type:* *string

The third-party API's URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.7.1/docs/resources/device_posture_integration#api_url DevicePostureIntegration#api_url}

---

##### `AuthUrl`<sup>Optional</sup> <a name="AuthUrl" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA.property.authUrl"></a>

```go
AuthUrl *string
```

- *Type:* *string

The third-party authorization API URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.7.1/docs/resources/device_posture_integration#auth_url DevicePostureIntegration#auth_url}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

The client identifier for authenticating API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.7.1/docs/resources/device_posture_integration#client_id DevicePostureIntegration#client_id}

---

##### `ClientKey`<sup>Optional</sup> <a name="ClientKey" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA.property.clientKey"></a>

```go
ClientKey *string
```

- *Type:* *string

The client key for authenticating API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.7.1/docs/resources/device_posture_integration#client_key DevicePostureIntegration#client_key}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

The client secret for authenticating API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.7.1/docs/resources/device_posture_integration#client_secret DevicePostureIntegration#client_secret}

---

##### `CustomerId`<sup>Optional</sup> <a name="CustomerId" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigA.property.customerId"></a>

```go
CustomerId *string
```

- *Type:* *string

The customer identifier for authenticating API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.7.1/docs/resources/device_posture_integration#customer_id DevicePostureIntegration#customer_id}

---

## Classes <a name="Classes" id="Classes"></a>

### DevicePostureIntegrationConfigAList <a name="DevicePostureIntegrationConfigAList" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v6/devicepostureintegration"

devicepostureintegration.NewDevicePostureIntegrationConfigAList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DevicePostureIntegrationConfigAList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.get"></a>

```go
func Get(index *f64) DevicePostureIntegrationConfigAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevicePostureIntegrationConfigAOutputReference <a name="DevicePostureIntegrationConfigAOutputReference" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v6/devicepostureintegration"

devicepostureintegration.NewDevicePostureIntegrationConfigAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DevicePostureIntegrationConfigAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.resetApiUrl">ResetApiUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.resetAuthUrl">ResetAuthUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.resetClientKey">ResetClientKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.resetCustomerId">ResetCustomerId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiUrl` <a name="ResetApiUrl" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.resetApiUrl"></a>

```go
func ResetApiUrl()
```

##### `ResetAuthUrl` <a name="ResetAuthUrl" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.resetAuthUrl"></a>

```go
func ResetAuthUrl()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetClientKey` <a name="ResetClientKey" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.resetClientKey"></a>

```go
func ResetClientKey()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetCustomerId` <a name="ResetCustomerId" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.resetCustomerId"></a>

```go
func ResetCustomerId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.apiUrlInput">ApiUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.authUrlInput">AuthUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.clientKeyInput">ClientKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.customerIdInput">CustomerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.apiUrl">ApiUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.authUrl">AuthUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.clientKey">ClientKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.customerId">CustomerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiUrlInput`<sup>Optional</sup> <a name="ApiUrlInput" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.apiUrlInput"></a>

```go
func ApiUrlInput() *string
```

- *Type:* *string

---

##### `AuthUrlInput`<sup>Optional</sup> <a name="AuthUrlInput" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.authUrlInput"></a>

```go
func AuthUrlInput() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientKeyInput`<sup>Optional</sup> <a name="ClientKeyInput" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.clientKeyInput"></a>

```go
func ClientKeyInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `CustomerIdInput`<sup>Optional</sup> <a name="CustomerIdInput" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.customerIdInput"></a>

```go
func CustomerIdInput() *string
```

- *Type:* *string

---

##### `ApiUrl`<sup>Required</sup> <a name="ApiUrl" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.apiUrl"></a>

```go
func ApiUrl() *string
```

- *Type:* *string

---

##### `AuthUrl`<sup>Required</sup> <a name="AuthUrl" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.authUrl"></a>

```go
func AuthUrl() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientKey`<sup>Required</sup> <a name="ClientKey" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.clientKey"></a>

```go
func ClientKey() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `CustomerId`<sup>Required</sup> <a name="CustomerId" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.customerId"></a>

```go
func CustomerId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.devicePostureIntegration.DevicePostureIntegrationConfigAOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



