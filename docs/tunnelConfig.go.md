# `cloudflare_tunnel_config`

Refer to the Terraform Registory for docs: [`cloudflare_tunnel_config`](https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config).

# `tunnelConfig` Submodule <a name="`tunnelConfig` Submodule" id="@cdktf/provider-cloudflare.tunnelConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TunnelConfigA <a name="TunnelConfigA" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config cloudflare_tunnel_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/tunnelconfig"

tunnelconfig.NewTunnelConfigA(scope Construct, id *string, config TunnelConfigAConfig) TunnelConfigA
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigAConfig">TunnelConfigAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigAConfig">TunnelConfigAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.putConfig"></a>

```go
func PutConfig(value TunnelConfigConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig">TunnelConfigConfig</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/tunnelconfig"

tunnelconfig.TunnelConfigA_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/tunnelconfig"

tunnelconfig.TunnelConfigA_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/tunnelconfig"

tunnelconfig.TunnelConfigA_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference">TunnelConfigConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig">TunnelConfigConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.tunnelIdInput">TunnelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.tunnelId">TunnelId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.config"></a>

```go
func Config() TunnelConfigConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference">TunnelConfigConfigOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.configInput"></a>

```go
func ConfigInput() TunnelConfigConfig
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig">TunnelConfigConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TunnelIdInput`<sup>Optional</sup> <a name="TunnelIdInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.tunnelIdInput"></a>

```go
func TunnelIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.tunnelId"></a>

```go
func TunnelId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigA.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TunnelConfigAConfig <a name="TunnelConfigAConfig" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigAConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/tunnelconfig"

&tunnelconfig.TunnelConfigAConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Config: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10.tunnelConfig.TunnelConfigConfig,
	TunnelId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigAConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigAConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigAConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigAConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigAConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigAConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigAConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigAConfig.property.accountId">AccountId</a></code> | <code>*string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigAConfig.property.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig">TunnelConfigConfig</a></code> | config block. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigAConfig.property.tunnelId">TunnelId</a></code> | <code>*string</code> | Identifier of the Tunnel to target for this configuration. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigAConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#id TunnelConfigA#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigAConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigAConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigAConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigAConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigAConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigAConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigAConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigAConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#account_id TunnelConfigA#account_id}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigAConfig.property.config"></a>

```go
Config TunnelConfigConfig
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig">TunnelConfigConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#config TunnelConfigA#config}

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigAConfig.property.tunnelId"></a>

```go
TunnelId *string
```

- *Type:* *string

Identifier of the Tunnel to target for this configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#tunnel_id TunnelConfigA#tunnel_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigAConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#id TunnelConfigA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### TunnelConfigConfig <a name="TunnelConfigConfig" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/tunnelconfig"

&tunnelconfig.TunnelConfigConfig {
	IngressRule: interface{},
	OriginRequest: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10.tunnelConfig.TunnelConfigConfigOriginRequest,
	WarpRouting: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10.tunnelConfig.TunnelConfigConfigWarpRouting,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.ingressRule">IngressRule</a></code> | <code>interface{}</code> | ingress_rule block. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.originRequest">OriginRequest</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest">TunnelConfigConfigOriginRequest</a></code> | origin_request block. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.warpRouting">WarpRouting</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting">TunnelConfigConfigWarpRouting</a></code> | warp_routing block. |

---

##### `IngressRule`<sup>Required</sup> <a name="IngressRule" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.ingressRule"></a>

```go
IngressRule interface{}
```

- *Type:* interface{}

ingress_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#ingress_rule TunnelConfigA#ingress_rule}

---

##### `OriginRequest`<sup>Optional</sup> <a name="OriginRequest" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.originRequest"></a>

```go
OriginRequest TunnelConfigConfigOriginRequest
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest">TunnelConfigConfigOriginRequest</a>

origin_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#origin_request TunnelConfigA#origin_request}

---

##### `WarpRouting`<sup>Optional</sup> <a name="WarpRouting" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.warpRouting"></a>

```go
WarpRouting TunnelConfigConfigWarpRouting
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting">TunnelConfigConfigWarpRouting</a>

warp_routing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#warp_routing TunnelConfigA#warp_routing}

---

### TunnelConfigConfigIngressRule <a name="TunnelConfigConfigIngressRule" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/tunnelconfig"

&tunnelconfig.TunnelConfigConfigIngressRule {
	Service: *string,
	Hostname: *string,
	OriginRequest: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest,
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule.property.service">Service</a></code> | <code>*string</code> | Name of the service to which the request will be sent. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule.property.hostname">Hostname</a></code> | <code>*string</code> | Hostname to match the incoming request with. If the hostname matches, the request will be sent to the service. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule.property.originRequest">OriginRequest</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest">TunnelConfigConfigIngressRuleOriginRequest</a></code> | origin_request block. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule.property.path">Path</a></code> | <code>*string</code> | Path of the incoming request. If the path matches, the request will be sent to the local service. |

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule.property.service"></a>

```go
Service *string
```

- *Type:* *string

Name of the service to which the request will be sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#service TunnelConfigA#service}

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

Hostname to match the incoming request with. If the hostname matches, the request will be sent to the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#hostname TunnelConfigA#hostname}

---

##### `OriginRequest`<sup>Optional</sup> <a name="OriginRequest" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule.property.originRequest"></a>

```go
OriginRequest TunnelConfigConfigIngressRuleOriginRequest
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest">TunnelConfigConfigIngressRuleOriginRequest</a>

origin_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#origin_request TunnelConfigA#origin_request}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule.property.path"></a>

```go
Path *string
```

- *Type:* *string

Path of the incoming request. If the path matches, the request will be sent to the local service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#path TunnelConfigA#path}

---

### TunnelConfigConfigIngressRuleOriginRequest <a name="TunnelConfigConfigIngressRuleOriginRequest" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/tunnelconfig"

&tunnelconfig.TunnelConfigConfigIngressRuleOriginRequest {
	Access: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccess,
	BastionMode: interface{},
	CaPool: *string,
	ConnectTimeout: *string,
	DisableChunkedEncoding: interface{},
	Http2Origin: interface{},
	HttpHostHeader: *string,
	IpRules: interface{},
	KeepAliveConnections: *f64,
	KeepAliveTimeout: *string,
	NoHappyEyeballs: interface{},
	NoTlsVerify: interface{},
	OriginServerName: *string,
	ProxyAddress: *string,
	ProxyPort: *f64,
	ProxyType: *string,
	TcpKeepAlive: *string,
	TlsTimeout: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.access">Access</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccess">TunnelConfigConfigIngressRuleOriginRequestAccess</a></code> | access block. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.bastionMode">BastionMode</a></code> | <code>interface{}</code> | Runs as jump host. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.caPool">CaPool</a></code> | <code>*string</code> | Path to the certificate authority (CA) for the certificate of your origin. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.connectTimeout">ConnectTimeout</a></code> | <code>*string</code> | Timeout for establishing a new TCP connection to your origin server. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.disableChunkedEncoding">DisableChunkedEncoding</a></code> | <code>interface{}</code> | Disables chunked transfer encoding. Useful if you are running a Web Server Gateway Interface (WSGI) server. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.http2Origin">Http2Origin</a></code> | <code>interface{}</code> | Enables HTTP/2 support for the origin connection. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.httpHostHeader">HttpHostHeader</a></code> | <code>*string</code> | Sets the HTTP Host header on requests sent to the local service. Defaults to `""`. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.ipRules">IpRules</a></code> | <code>interface{}</code> | ip_rules block. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.keepAliveConnections">KeepAliveConnections</a></code> | <code>*f64</code> | Maximum number of idle keepalive connections between Tunnel and your origin. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.keepAliveTimeout">KeepAliveTimeout</a></code> | <code>*string</code> | Timeout after which an idle keepalive connection can be discarded. Defaults to `1m30s`. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.noHappyEyeballs">NoHappyEyeballs</a></code> | <code>interface{}</code> | Disable the “happy eyeballs” algorithm for IPv4/IPv6 fallback if your local network has misconfigured one of the protocols. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.noTlsVerify">NoTlsVerify</a></code> | <code>interface{}</code> | Disables TLS verification of the certificate presented by your origin. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.originServerName">OriginServerName</a></code> | <code>*string</code> | Hostname that cloudflared should expect from your origin server certificate. Defaults to `""`. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.proxyAddress">ProxyAddress</a></code> | <code>*string</code> | cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.proxyPort">ProxyPort</a></code> | <code>*f64</code> | cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.proxyType">ProxyType</a></code> | <code>*string</code> | cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.tcpKeepAlive">TcpKeepAlive</a></code> | <code>*string</code> | The timeout after which a TCP keepalive packet is sent on a connection between Tunnel and the origin server. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.tlsTimeout">TlsTimeout</a></code> | <code>*string</code> | Timeout for completing a TLS handshake to your origin server, if you have chosen to connect Tunnel to an HTTPS server. |

---

##### `Access`<sup>Optional</sup> <a name="Access" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.access"></a>

```go
Access TunnelConfigConfigIngressRuleOriginRequestAccess
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccess">TunnelConfigConfigIngressRuleOriginRequestAccess</a>

access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#access TunnelConfigA#access}

---

##### `BastionMode`<sup>Optional</sup> <a name="BastionMode" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.bastionMode"></a>

```go
BastionMode interface{}
```

- *Type:* interface{}

Runs as jump host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#bastion_mode TunnelConfigA#bastion_mode}

---

##### `CaPool`<sup>Optional</sup> <a name="CaPool" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.caPool"></a>

```go
CaPool *string
```

- *Type:* *string

Path to the certificate authority (CA) for the certificate of your origin.

This option should be used only if your certificate is not signed by Cloudflare. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#ca_pool TunnelConfigA#ca_pool}

---

##### `ConnectTimeout`<sup>Optional</sup> <a name="ConnectTimeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.connectTimeout"></a>

```go
ConnectTimeout *string
```

- *Type:* *string

Timeout for establishing a new TCP connection to your origin server.

This excludes the time taken to establish TLS, which is controlled by `tlsTimeout`. Defaults to `30s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#connect_timeout TunnelConfigA#connect_timeout}

---

##### `DisableChunkedEncoding`<sup>Optional</sup> <a name="DisableChunkedEncoding" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.disableChunkedEncoding"></a>

```go
DisableChunkedEncoding interface{}
```

- *Type:* interface{}

Disables chunked transfer encoding. Useful if you are running a Web Server Gateway Interface (WSGI) server. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#disable_chunked_encoding TunnelConfigA#disable_chunked_encoding}

---

##### `Http2Origin`<sup>Optional</sup> <a name="Http2Origin" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.http2Origin"></a>

```go
Http2Origin interface{}
```

- *Type:* interface{}

Enables HTTP/2 support for the origin connection. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#http2_origin TunnelConfigA#http2_origin}

---

##### `HttpHostHeader`<sup>Optional</sup> <a name="HttpHostHeader" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.httpHostHeader"></a>

```go
HttpHostHeader *string
```

- *Type:* *string

Sets the HTTP Host header on requests sent to the local service. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#http_host_header TunnelConfigA#http_host_header}

---

##### `IpRules`<sup>Optional</sup> <a name="IpRules" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.ipRules"></a>

```go
IpRules interface{}
```

- *Type:* interface{}

ip_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#ip_rules TunnelConfigA#ip_rules}

---

##### `KeepAliveConnections`<sup>Optional</sup> <a name="KeepAliveConnections" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.keepAliveConnections"></a>

```go
KeepAliveConnections *f64
```

- *Type:* *f64

Maximum number of idle keepalive connections between Tunnel and your origin.

This does not restrict the total number of concurrent connections. Defaults to `100`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#keep_alive_connections TunnelConfigA#keep_alive_connections}

---

##### `KeepAliveTimeout`<sup>Optional</sup> <a name="KeepAliveTimeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.keepAliveTimeout"></a>

```go
KeepAliveTimeout *string
```

- *Type:* *string

Timeout after which an idle keepalive connection can be discarded. Defaults to `1m30s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#keep_alive_timeout TunnelConfigA#keep_alive_timeout}

---

##### `NoHappyEyeballs`<sup>Optional</sup> <a name="NoHappyEyeballs" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.noHappyEyeballs"></a>

```go
NoHappyEyeballs interface{}
```

- *Type:* interface{}

Disable the “happy eyeballs” algorithm for IPv4/IPv6 fallback if your local network has misconfigured one of the protocols.

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#no_happy_eyeballs TunnelConfigA#no_happy_eyeballs}

---

##### `NoTlsVerify`<sup>Optional</sup> <a name="NoTlsVerify" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.noTlsVerify"></a>

```go
NoTlsVerify interface{}
```

- *Type:* interface{}

Disables TLS verification of the certificate presented by your origin.

Will allow any certificate from the origin to be accepted. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#no_tls_verify TunnelConfigA#no_tls_verify}

---

##### `OriginServerName`<sup>Optional</sup> <a name="OriginServerName" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.originServerName"></a>

```go
OriginServerName *string
```

- *Type:* *string

Hostname that cloudflared should expect from your origin server certificate. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#origin_server_name TunnelConfigA#origin_server_name}

---

##### `ProxyAddress`<sup>Optional</sup> <a name="ProxyAddress" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.proxyAddress"></a>

```go
ProxyAddress *string
```

- *Type:* *string

cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP.

This configures the listen address for that proxy. Defaults to `127.0.0.1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#proxy_address TunnelConfigA#proxy_address}

---

##### `ProxyPort`<sup>Optional</sup> <a name="ProxyPort" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.proxyPort"></a>

```go
ProxyPort *f64
```

- *Type:* *f64

cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP.

This configures the listen port for that proxy. If set to zero, an unused port will randomly be chosen. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#proxy_port TunnelConfigA#proxy_port}

---

##### `ProxyType`<sup>Optional</sup> <a name="ProxyType" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.proxyType"></a>

```go
ProxyType *string
```

- *Type:* *string

cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP.

This configures what type of proxy will be started. Available values: `""`, `socks`. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#proxy_type TunnelConfigA#proxy_type}

---

##### `TcpKeepAlive`<sup>Optional</sup> <a name="TcpKeepAlive" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.tcpKeepAlive"></a>

```go
TcpKeepAlive *string
```

- *Type:* *string

The timeout after which a TCP keepalive packet is sent on a connection between Tunnel and the origin server.

Defaults to `30s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#tcp_keep_alive TunnelConfigA#tcp_keep_alive}

---

##### `TlsTimeout`<sup>Optional</sup> <a name="TlsTimeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest.property.tlsTimeout"></a>

```go
TlsTimeout *string
```

- *Type:* *string

Timeout for completing a TLS handshake to your origin server, if you have chosen to connect Tunnel to an HTTPS server.

Defaults to `10s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#tls_timeout TunnelConfigA#tls_timeout}

---

### TunnelConfigConfigIngressRuleOriginRequestAccess <a name="TunnelConfigConfigIngressRuleOriginRequestAccess" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccess.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/tunnelconfig"

&tunnelconfig.TunnelConfigConfigIngressRuleOriginRequestAccess {
	AudTag: *[]*string,
	Required: interface{},
	TeamName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccess.property.audTag">AudTag</a></code> | <code>*[]*string</code> | Audience tags of the access rule. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccess.property.required">Required</a></code> | <code>interface{}</code> | Whether the access rule is required. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccess.property.teamName">TeamName</a></code> | <code>*string</code> | Name of the team to which the access rule applies. |

---

##### `AudTag`<sup>Optional</sup> <a name="AudTag" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccess.property.audTag"></a>

```go
AudTag *[]*string
```

- *Type:* *[]*string

Audience tags of the access rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#aud_tag TunnelConfigA#aud_tag}

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccess.property.required"></a>

```go
Required interface{}
```

- *Type:* interface{}

Whether the access rule is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#required TunnelConfigA#required}

---

##### `TeamName`<sup>Optional</sup> <a name="TeamName" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccess.property.teamName"></a>

```go
TeamName *string
```

- *Type:* *string

Name of the team to which the access rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#team_name TunnelConfigA#team_name}

---

### TunnelConfigConfigIngressRuleOriginRequestIpRules <a name="TunnelConfigConfigIngressRuleOriginRequestIpRules" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/tunnelconfig"

&tunnelconfig.TunnelConfigConfigIngressRuleOriginRequestIpRules {
	Allow: interface{},
	Ports: *[]*f64,
	Prefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRules.property.allow">Allow</a></code> | <code>interface{}</code> | Whether to allow the IP prefix. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRules.property.ports">Ports</a></code> | <code>*[]*f64</code> | Ports to use within the IP rule. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRules.property.prefix">Prefix</a></code> | <code>*string</code> | IP rule prefix. |

---

##### `Allow`<sup>Optional</sup> <a name="Allow" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRules.property.allow"></a>

```go
Allow interface{}
```

- *Type:* interface{}

Whether to allow the IP prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#allow TunnelConfigA#allow}

---

##### `Ports`<sup>Optional</sup> <a name="Ports" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRules.property.ports"></a>

```go
Ports *[]*f64
```

- *Type:* *[]*f64

Ports to use within the IP rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#ports TunnelConfigA#ports}

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRules.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

IP rule prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#prefix TunnelConfigA#prefix}

---

### TunnelConfigConfigOriginRequest <a name="TunnelConfigConfigOriginRequest" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/tunnelconfig"

&tunnelconfig.TunnelConfigConfigOriginRequest {
	Access: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10.tunnelConfig.TunnelConfigConfigOriginRequestAccess,
	BastionMode: interface{},
	CaPool: *string,
	ConnectTimeout: *string,
	DisableChunkedEncoding: interface{},
	Http2Origin: interface{},
	HttpHostHeader: *string,
	IpRules: interface{},
	KeepAliveConnections: *f64,
	KeepAliveTimeout: *string,
	NoHappyEyeballs: interface{},
	NoTlsVerify: interface{},
	OriginServerName: *string,
	ProxyAddress: *string,
	ProxyPort: *f64,
	ProxyType: *string,
	TcpKeepAlive: *string,
	TlsTimeout: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.access">Access</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccess">TunnelConfigConfigOriginRequestAccess</a></code> | access block. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.bastionMode">BastionMode</a></code> | <code>interface{}</code> | Runs as jump host. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.caPool">CaPool</a></code> | <code>*string</code> | Path to the certificate authority (CA) for the certificate of your origin. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.connectTimeout">ConnectTimeout</a></code> | <code>*string</code> | Timeout for establishing a new TCP connection to your origin server. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.disableChunkedEncoding">DisableChunkedEncoding</a></code> | <code>interface{}</code> | Disables chunked transfer encoding. Useful if you are running a Web Server Gateway Interface (WSGI) server. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.http2Origin">Http2Origin</a></code> | <code>interface{}</code> | Enables HTTP/2 support for the origin connection. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.httpHostHeader">HttpHostHeader</a></code> | <code>*string</code> | Sets the HTTP Host header on requests sent to the local service. Defaults to `""`. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.ipRules">IpRules</a></code> | <code>interface{}</code> | ip_rules block. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.keepAliveConnections">KeepAliveConnections</a></code> | <code>*f64</code> | Maximum number of idle keepalive connections between Tunnel and your origin. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.keepAliveTimeout">KeepAliveTimeout</a></code> | <code>*string</code> | Timeout after which an idle keepalive connection can be discarded. Defaults to `1m30s`. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.noHappyEyeballs">NoHappyEyeballs</a></code> | <code>interface{}</code> | Disable the “happy eyeballs” algorithm for IPv4/IPv6 fallback if your local network has misconfigured one of the protocols. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.noTlsVerify">NoTlsVerify</a></code> | <code>interface{}</code> | Disables TLS verification of the certificate presented by your origin. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.originServerName">OriginServerName</a></code> | <code>*string</code> | Hostname that cloudflared should expect from your origin server certificate. Defaults to `""`. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.proxyAddress">ProxyAddress</a></code> | <code>*string</code> | cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.proxyPort">ProxyPort</a></code> | <code>*f64</code> | cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.proxyType">ProxyType</a></code> | <code>*string</code> | cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.tcpKeepAlive">TcpKeepAlive</a></code> | <code>*string</code> | The timeout after which a TCP keepalive packet is sent on a connection between Tunnel and the origin server. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.tlsTimeout">TlsTimeout</a></code> | <code>*string</code> | Timeout for completing a TLS handshake to your origin server, if you have chosen to connect Tunnel to an HTTPS server. |

---

##### `Access`<sup>Optional</sup> <a name="Access" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.access"></a>

```go
Access TunnelConfigConfigOriginRequestAccess
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccess">TunnelConfigConfigOriginRequestAccess</a>

access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#access TunnelConfigA#access}

---

##### `BastionMode`<sup>Optional</sup> <a name="BastionMode" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.bastionMode"></a>

```go
BastionMode interface{}
```

- *Type:* interface{}

Runs as jump host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#bastion_mode TunnelConfigA#bastion_mode}

---

##### `CaPool`<sup>Optional</sup> <a name="CaPool" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.caPool"></a>

```go
CaPool *string
```

- *Type:* *string

Path to the certificate authority (CA) for the certificate of your origin.

This option should be used only if your certificate is not signed by Cloudflare. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#ca_pool TunnelConfigA#ca_pool}

---

##### `ConnectTimeout`<sup>Optional</sup> <a name="ConnectTimeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.connectTimeout"></a>

```go
ConnectTimeout *string
```

- *Type:* *string

Timeout for establishing a new TCP connection to your origin server.

This excludes the time taken to establish TLS, which is controlled by `tlsTimeout`. Defaults to `30s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#connect_timeout TunnelConfigA#connect_timeout}

---

##### `DisableChunkedEncoding`<sup>Optional</sup> <a name="DisableChunkedEncoding" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.disableChunkedEncoding"></a>

```go
DisableChunkedEncoding interface{}
```

- *Type:* interface{}

Disables chunked transfer encoding. Useful if you are running a Web Server Gateway Interface (WSGI) server. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#disable_chunked_encoding TunnelConfigA#disable_chunked_encoding}

---

##### `Http2Origin`<sup>Optional</sup> <a name="Http2Origin" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.http2Origin"></a>

```go
Http2Origin interface{}
```

- *Type:* interface{}

Enables HTTP/2 support for the origin connection. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#http2_origin TunnelConfigA#http2_origin}

---

##### `HttpHostHeader`<sup>Optional</sup> <a name="HttpHostHeader" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.httpHostHeader"></a>

```go
HttpHostHeader *string
```

- *Type:* *string

Sets the HTTP Host header on requests sent to the local service. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#http_host_header TunnelConfigA#http_host_header}

---

##### `IpRules`<sup>Optional</sup> <a name="IpRules" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.ipRules"></a>

```go
IpRules interface{}
```

- *Type:* interface{}

ip_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#ip_rules TunnelConfigA#ip_rules}

---

##### `KeepAliveConnections`<sup>Optional</sup> <a name="KeepAliveConnections" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.keepAliveConnections"></a>

```go
KeepAliveConnections *f64
```

- *Type:* *f64

Maximum number of idle keepalive connections between Tunnel and your origin.

This does not restrict the total number of concurrent connections. Defaults to `100`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#keep_alive_connections TunnelConfigA#keep_alive_connections}

---

##### `KeepAliveTimeout`<sup>Optional</sup> <a name="KeepAliveTimeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.keepAliveTimeout"></a>

```go
KeepAliveTimeout *string
```

- *Type:* *string

Timeout after which an idle keepalive connection can be discarded. Defaults to `1m30s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#keep_alive_timeout TunnelConfigA#keep_alive_timeout}

---

##### `NoHappyEyeballs`<sup>Optional</sup> <a name="NoHappyEyeballs" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.noHappyEyeballs"></a>

```go
NoHappyEyeballs interface{}
```

- *Type:* interface{}

Disable the “happy eyeballs” algorithm for IPv4/IPv6 fallback if your local network has misconfigured one of the protocols.

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#no_happy_eyeballs TunnelConfigA#no_happy_eyeballs}

---

##### `NoTlsVerify`<sup>Optional</sup> <a name="NoTlsVerify" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.noTlsVerify"></a>

```go
NoTlsVerify interface{}
```

- *Type:* interface{}

Disables TLS verification of the certificate presented by your origin.

Will allow any certificate from the origin to be accepted. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#no_tls_verify TunnelConfigA#no_tls_verify}

---

##### `OriginServerName`<sup>Optional</sup> <a name="OriginServerName" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.originServerName"></a>

```go
OriginServerName *string
```

- *Type:* *string

Hostname that cloudflared should expect from your origin server certificate. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#origin_server_name TunnelConfigA#origin_server_name}

---

##### `ProxyAddress`<sup>Optional</sup> <a name="ProxyAddress" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.proxyAddress"></a>

```go
ProxyAddress *string
```

- *Type:* *string

cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP.

This configures the listen address for that proxy. Defaults to `127.0.0.1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#proxy_address TunnelConfigA#proxy_address}

---

##### `ProxyPort`<sup>Optional</sup> <a name="ProxyPort" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.proxyPort"></a>

```go
ProxyPort *f64
```

- *Type:* *f64

cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP.

This configures the listen port for that proxy. If set to zero, an unused port will randomly be chosen. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#proxy_port TunnelConfigA#proxy_port}

---

##### `ProxyType`<sup>Optional</sup> <a name="ProxyType" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.proxyType"></a>

```go
ProxyType *string
```

- *Type:* *string

cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP.

This configures what type of proxy will be started. Available values: `""`, `socks`. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#proxy_type TunnelConfigA#proxy_type}

---

##### `TcpKeepAlive`<sup>Optional</sup> <a name="TcpKeepAlive" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.tcpKeepAlive"></a>

```go
TcpKeepAlive *string
```

- *Type:* *string

The timeout after which a TCP keepalive packet is sent on a connection between Tunnel and the origin server.

Defaults to `30s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#tcp_keep_alive TunnelConfigA#tcp_keep_alive}

---

##### `TlsTimeout`<sup>Optional</sup> <a name="TlsTimeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.tlsTimeout"></a>

```go
TlsTimeout *string
```

- *Type:* *string

Timeout for completing a TLS handshake to your origin server, if you have chosen to connect Tunnel to an HTTPS server.

Defaults to `10s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#tls_timeout TunnelConfigA#tls_timeout}

---

### TunnelConfigConfigOriginRequestAccess <a name="TunnelConfigConfigOriginRequestAccess" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccess.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/tunnelconfig"

&tunnelconfig.TunnelConfigConfigOriginRequestAccess {
	AudTag: *[]*string,
	Required: interface{},
	TeamName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccess.property.audTag">AudTag</a></code> | <code>*[]*string</code> | Audience tags of the access rule. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccess.property.required">Required</a></code> | <code>interface{}</code> | Whether the access rule is required. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccess.property.teamName">TeamName</a></code> | <code>*string</code> | Name of the team to which the access rule applies. |

---

##### `AudTag`<sup>Optional</sup> <a name="AudTag" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccess.property.audTag"></a>

```go
AudTag *[]*string
```

- *Type:* *[]*string

Audience tags of the access rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#aud_tag TunnelConfigA#aud_tag}

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccess.property.required"></a>

```go
Required interface{}
```

- *Type:* interface{}

Whether the access rule is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#required TunnelConfigA#required}

---

##### `TeamName`<sup>Optional</sup> <a name="TeamName" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccess.property.teamName"></a>

```go
TeamName *string
```

- *Type:* *string

Name of the team to which the access rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#team_name TunnelConfigA#team_name}

---

### TunnelConfigConfigOriginRequestIpRules <a name="TunnelConfigConfigOriginRequestIpRules" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/tunnelconfig"

&tunnelconfig.TunnelConfigConfigOriginRequestIpRules {
	Allow: interface{},
	Ports: *[]*f64,
	Prefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules.property.allow">Allow</a></code> | <code>interface{}</code> | Whether to allow the IP prefix. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules.property.ports">Ports</a></code> | <code>*[]*f64</code> | Ports to use within the IP rule. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules.property.prefix">Prefix</a></code> | <code>*string</code> | IP rule prefix. |

---

##### `Allow`<sup>Optional</sup> <a name="Allow" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules.property.allow"></a>

```go
Allow interface{}
```

- *Type:* interface{}

Whether to allow the IP prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#allow TunnelConfigA#allow}

---

##### `Ports`<sup>Optional</sup> <a name="Ports" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules.property.ports"></a>

```go
Ports *[]*f64
```

- *Type:* *[]*f64

Ports to use within the IP rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#ports TunnelConfigA#ports}

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

IP rule prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#prefix TunnelConfigA#prefix}

---

### TunnelConfigConfigWarpRouting <a name="TunnelConfigConfigWarpRouting" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/tunnelconfig"

&tunnelconfig.TunnelConfigConfigWarpRouting {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether WARP routing is enabled. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether WARP routing is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#enabled TunnelConfigA#enabled}

---

## Classes <a name="Classes" id="Classes"></a>

### TunnelConfigConfigIngressRuleList <a name="TunnelConfigConfigIngressRuleList" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/tunnelconfig"

tunnelconfig.NewTunnelConfigConfigIngressRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) TunnelConfigConfigIngressRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.get"></a>

```go
func Get(index *f64) TunnelConfigConfigIngressRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference <a name="TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/tunnelconfig"

tunnelconfig.NewTunnelConfigConfigIngressRuleOriginRequestAccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.resetAudTag">ResetAudTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.resetRequired">ResetRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.resetTeamName">ResetTeamName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAudTag` <a name="ResetAudTag" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.resetAudTag"></a>

```go
func ResetAudTag()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.resetRequired"></a>

```go
func ResetRequired()
```

##### `ResetTeamName` <a name="ResetTeamName" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.resetTeamName"></a>

```go
func ResetTeamName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.property.audTagInput">AudTagInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.property.requiredInput">RequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.property.teamNameInput">TeamNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.property.audTag">AudTag</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.property.required">Required</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.property.teamName">TeamName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccess">TunnelConfigConfigIngressRuleOriginRequestAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AudTagInput`<sup>Optional</sup> <a name="AudTagInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.property.audTagInput"></a>

```go
func AudTagInput() *[]*string
```

- *Type:* *[]*string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.property.requiredInput"></a>

```go
func RequiredInput() interface{}
```

- *Type:* interface{}

---

##### `TeamNameInput`<sup>Optional</sup> <a name="TeamNameInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.property.teamNameInput"></a>

```go
func TeamNameInput() *string
```

- *Type:* *string

---

##### `AudTag`<sup>Required</sup> <a name="AudTag" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.property.audTag"></a>

```go
func AudTag() *[]*string
```

- *Type:* *[]*string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.property.required"></a>

```go
func Required() interface{}
```

- *Type:* interface{}

---

##### `TeamName`<sup>Required</sup> <a name="TeamName" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.property.teamName"></a>

```go
func TeamName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference.property.internalValue"></a>

```go
func InternalValue() TunnelConfigConfigIngressRuleOriginRequestAccess
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccess">TunnelConfigConfigIngressRuleOriginRequestAccess</a>

---


### TunnelConfigConfigIngressRuleOriginRequestIpRulesList <a name="TunnelConfigConfigIngressRuleOriginRequestIpRulesList" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/tunnelconfig"

tunnelconfig.NewTunnelConfigConfigIngressRuleOriginRequestIpRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) TunnelConfigConfigIngressRuleOriginRequestIpRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList.get"></a>

```go
func Get(index *f64) TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference <a name="TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/tunnelconfig"

tunnelconfig.NewTunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.resetAllow">ResetAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.resetPorts">ResetPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllow` <a name="ResetAllow" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.resetAllow"></a>

```go
func ResetAllow()
```

##### `ResetPorts` <a name="ResetPorts" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.resetPorts"></a>

```go
func ResetPorts()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.property.allowInput">AllowInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.property.portsInput">PortsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.property.allow">Allow</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.property.ports">Ports</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowInput`<sup>Optional</sup> <a name="AllowInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.property.allowInput"></a>

```go
func AllowInput() interface{}
```

- *Type:* interface{}

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.property.portsInput"></a>

```go
func PortsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `Allow`<sup>Required</sup> <a name="Allow" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.property.allow"></a>

```go
func Allow() interface{}
```

- *Type:* interface{}

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.property.ports"></a>

```go
func Ports() *[]*f64
```

- *Type:* *[]*f64

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TunnelConfigConfigIngressRuleOriginRequestOutputReference <a name="TunnelConfigConfigIngressRuleOriginRequestOutputReference" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/tunnelconfig"

tunnelconfig.NewTunnelConfigConfigIngressRuleOriginRequestOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TunnelConfigConfigIngressRuleOriginRequestOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.putAccess">PutAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.putIpRules">PutIpRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetAccess">ResetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetBastionMode">ResetBastionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetCaPool">ResetCaPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetConnectTimeout">ResetConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetDisableChunkedEncoding">ResetDisableChunkedEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetHttp2Origin">ResetHttp2Origin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetHttpHostHeader">ResetHttpHostHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetIpRules">ResetIpRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetKeepAliveConnections">ResetKeepAliveConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetKeepAliveTimeout">ResetKeepAliveTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetNoHappyEyeballs">ResetNoHappyEyeballs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetNoTlsVerify">ResetNoTlsVerify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetOriginServerName">ResetOriginServerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetProxyAddress">ResetProxyAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetProxyPort">ResetProxyPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetProxyType">ResetProxyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetTcpKeepAlive">ResetTcpKeepAlive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetTlsTimeout">ResetTlsTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccess` <a name="PutAccess" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.putAccess"></a>

```go
func PutAccess(value TunnelConfigConfigIngressRuleOriginRequestAccess)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.putAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccess">TunnelConfigConfigIngressRuleOriginRequestAccess</a>

---

##### `PutIpRules` <a name="PutIpRules" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.putIpRules"></a>

```go
func PutIpRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.putIpRules.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccess` <a name="ResetAccess" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetAccess"></a>

```go
func ResetAccess()
```

##### `ResetBastionMode` <a name="ResetBastionMode" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetBastionMode"></a>

```go
func ResetBastionMode()
```

##### `ResetCaPool` <a name="ResetCaPool" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetCaPool"></a>

```go
func ResetCaPool()
```

##### `ResetConnectTimeout` <a name="ResetConnectTimeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetConnectTimeout"></a>

```go
func ResetConnectTimeout()
```

##### `ResetDisableChunkedEncoding` <a name="ResetDisableChunkedEncoding" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetDisableChunkedEncoding"></a>

```go
func ResetDisableChunkedEncoding()
```

##### `ResetHttp2Origin` <a name="ResetHttp2Origin" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetHttp2Origin"></a>

```go
func ResetHttp2Origin()
```

##### `ResetHttpHostHeader` <a name="ResetHttpHostHeader" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetHttpHostHeader"></a>

```go
func ResetHttpHostHeader()
```

##### `ResetIpRules` <a name="ResetIpRules" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetIpRules"></a>

```go
func ResetIpRules()
```

##### `ResetKeepAliveConnections` <a name="ResetKeepAliveConnections" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetKeepAliveConnections"></a>

```go
func ResetKeepAliveConnections()
```

##### `ResetKeepAliveTimeout` <a name="ResetKeepAliveTimeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetKeepAliveTimeout"></a>

```go
func ResetKeepAliveTimeout()
```

##### `ResetNoHappyEyeballs` <a name="ResetNoHappyEyeballs" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetNoHappyEyeballs"></a>

```go
func ResetNoHappyEyeballs()
```

##### `ResetNoTlsVerify` <a name="ResetNoTlsVerify" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetNoTlsVerify"></a>

```go
func ResetNoTlsVerify()
```

##### `ResetOriginServerName` <a name="ResetOriginServerName" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetOriginServerName"></a>

```go
func ResetOriginServerName()
```

##### `ResetProxyAddress` <a name="ResetProxyAddress" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetProxyAddress"></a>

```go
func ResetProxyAddress()
```

##### `ResetProxyPort` <a name="ResetProxyPort" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetProxyPort"></a>

```go
func ResetProxyPort()
```

##### `ResetProxyType` <a name="ResetProxyType" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetProxyType"></a>

```go
func ResetProxyType()
```

##### `ResetTcpKeepAlive` <a name="ResetTcpKeepAlive" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetTcpKeepAlive"></a>

```go
func ResetTcpKeepAlive()
```

##### `ResetTlsTimeout` <a name="ResetTlsTimeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.resetTlsTimeout"></a>

```go
func ResetTlsTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.access">Access</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference">TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.ipRules">IpRules</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList">TunnelConfigConfigIngressRuleOriginRequestIpRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.accessInput">AccessInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccess">TunnelConfigConfigIngressRuleOriginRequestAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.bastionModeInput">BastionModeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.caPoolInput">CaPoolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.connectTimeoutInput">ConnectTimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.disableChunkedEncodingInput">DisableChunkedEncodingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.http2OriginInput">Http2OriginInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.httpHostHeaderInput">HttpHostHeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.ipRulesInput">IpRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.keepAliveConnectionsInput">KeepAliveConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.keepAliveTimeoutInput">KeepAliveTimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.noHappyEyeballsInput">NoHappyEyeballsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.noTlsVerifyInput">NoTlsVerifyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.originServerNameInput">OriginServerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.proxyAddressInput">ProxyAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.proxyPortInput">ProxyPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.proxyTypeInput">ProxyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.tcpKeepAliveInput">TcpKeepAliveInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.tlsTimeoutInput">TlsTimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.bastionMode">BastionMode</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.caPool">CaPool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.connectTimeout">ConnectTimeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.disableChunkedEncoding">DisableChunkedEncoding</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.http2Origin">Http2Origin</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.httpHostHeader">HttpHostHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.keepAliveConnections">KeepAliveConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.keepAliveTimeout">KeepAliveTimeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.noHappyEyeballs">NoHappyEyeballs</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.noTlsVerify">NoTlsVerify</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.originServerName">OriginServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.proxyAddress">ProxyAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.proxyPort">ProxyPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.proxyType">ProxyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.tcpKeepAlive">TcpKeepAlive</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.tlsTimeout">TlsTimeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest">TunnelConfigConfigIngressRuleOriginRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Access`<sup>Required</sup> <a name="Access" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.access"></a>

```go
func Access() TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference">TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference</a>

---

##### `IpRules`<sup>Required</sup> <a name="IpRules" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.ipRules"></a>

```go
func IpRules() TunnelConfigConfigIngressRuleOriginRequestIpRulesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestIpRulesList">TunnelConfigConfigIngressRuleOriginRequestIpRulesList</a>

---

##### `AccessInput`<sup>Optional</sup> <a name="AccessInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.accessInput"></a>

```go
func AccessInput() TunnelConfigConfigIngressRuleOriginRequestAccess
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestAccess">TunnelConfigConfigIngressRuleOriginRequestAccess</a>

---

##### `BastionModeInput`<sup>Optional</sup> <a name="BastionModeInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.bastionModeInput"></a>

```go
func BastionModeInput() interface{}
```

- *Type:* interface{}

---

##### `CaPoolInput`<sup>Optional</sup> <a name="CaPoolInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.caPoolInput"></a>

```go
func CaPoolInput() *string
```

- *Type:* *string

---

##### `ConnectTimeoutInput`<sup>Optional</sup> <a name="ConnectTimeoutInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.connectTimeoutInput"></a>

```go
func ConnectTimeoutInput() *string
```

- *Type:* *string

---

##### `DisableChunkedEncodingInput`<sup>Optional</sup> <a name="DisableChunkedEncodingInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.disableChunkedEncodingInput"></a>

```go
func DisableChunkedEncodingInput() interface{}
```

- *Type:* interface{}

---

##### `Http2OriginInput`<sup>Optional</sup> <a name="Http2OriginInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.http2OriginInput"></a>

```go
func Http2OriginInput() interface{}
```

- *Type:* interface{}

---

##### `HttpHostHeaderInput`<sup>Optional</sup> <a name="HttpHostHeaderInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.httpHostHeaderInput"></a>

```go
func HttpHostHeaderInput() *string
```

- *Type:* *string

---

##### `IpRulesInput`<sup>Optional</sup> <a name="IpRulesInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.ipRulesInput"></a>

```go
func IpRulesInput() interface{}
```

- *Type:* interface{}

---

##### `KeepAliveConnectionsInput`<sup>Optional</sup> <a name="KeepAliveConnectionsInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.keepAliveConnectionsInput"></a>

```go
func KeepAliveConnectionsInput() *f64
```

- *Type:* *f64

---

##### `KeepAliveTimeoutInput`<sup>Optional</sup> <a name="KeepAliveTimeoutInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.keepAliveTimeoutInput"></a>

```go
func KeepAliveTimeoutInput() *string
```

- *Type:* *string

---

##### `NoHappyEyeballsInput`<sup>Optional</sup> <a name="NoHappyEyeballsInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.noHappyEyeballsInput"></a>

```go
func NoHappyEyeballsInput() interface{}
```

- *Type:* interface{}

---

##### `NoTlsVerifyInput`<sup>Optional</sup> <a name="NoTlsVerifyInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.noTlsVerifyInput"></a>

```go
func NoTlsVerifyInput() interface{}
```

- *Type:* interface{}

---

##### `OriginServerNameInput`<sup>Optional</sup> <a name="OriginServerNameInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.originServerNameInput"></a>

```go
func OriginServerNameInput() *string
```

- *Type:* *string

---

##### `ProxyAddressInput`<sup>Optional</sup> <a name="ProxyAddressInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.proxyAddressInput"></a>

```go
func ProxyAddressInput() *string
```

- *Type:* *string

---

##### `ProxyPortInput`<sup>Optional</sup> <a name="ProxyPortInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.proxyPortInput"></a>

```go
func ProxyPortInput() *f64
```

- *Type:* *f64

---

##### `ProxyTypeInput`<sup>Optional</sup> <a name="ProxyTypeInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.proxyTypeInput"></a>

```go
func ProxyTypeInput() *string
```

- *Type:* *string

---

##### `TcpKeepAliveInput`<sup>Optional</sup> <a name="TcpKeepAliveInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.tcpKeepAliveInput"></a>

```go
func TcpKeepAliveInput() *string
```

- *Type:* *string

---

##### `TlsTimeoutInput`<sup>Optional</sup> <a name="TlsTimeoutInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.tlsTimeoutInput"></a>

```go
func TlsTimeoutInput() *string
```

- *Type:* *string

---

##### `BastionMode`<sup>Required</sup> <a name="BastionMode" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.bastionMode"></a>

```go
func BastionMode() interface{}
```

- *Type:* interface{}

---

##### `CaPool`<sup>Required</sup> <a name="CaPool" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.caPool"></a>

```go
func CaPool() *string
```

- *Type:* *string

---

##### `ConnectTimeout`<sup>Required</sup> <a name="ConnectTimeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.connectTimeout"></a>

```go
func ConnectTimeout() *string
```

- *Type:* *string

---

##### `DisableChunkedEncoding`<sup>Required</sup> <a name="DisableChunkedEncoding" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.disableChunkedEncoding"></a>

```go
func DisableChunkedEncoding() interface{}
```

- *Type:* interface{}

---

##### `Http2Origin`<sup>Required</sup> <a name="Http2Origin" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.http2Origin"></a>

```go
func Http2Origin() interface{}
```

- *Type:* interface{}

---

##### `HttpHostHeader`<sup>Required</sup> <a name="HttpHostHeader" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.httpHostHeader"></a>

```go
func HttpHostHeader() *string
```

- *Type:* *string

---

##### `KeepAliveConnections`<sup>Required</sup> <a name="KeepAliveConnections" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.keepAliveConnections"></a>

```go
func KeepAliveConnections() *f64
```

- *Type:* *f64

---

##### `KeepAliveTimeout`<sup>Required</sup> <a name="KeepAliveTimeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.keepAliveTimeout"></a>

```go
func KeepAliveTimeout() *string
```

- *Type:* *string

---

##### `NoHappyEyeballs`<sup>Required</sup> <a name="NoHappyEyeballs" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.noHappyEyeballs"></a>

```go
func NoHappyEyeballs() interface{}
```

- *Type:* interface{}

---

##### `NoTlsVerify`<sup>Required</sup> <a name="NoTlsVerify" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.noTlsVerify"></a>

```go
func NoTlsVerify() interface{}
```

- *Type:* interface{}

---

##### `OriginServerName`<sup>Required</sup> <a name="OriginServerName" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.originServerName"></a>

```go
func OriginServerName() *string
```

- *Type:* *string

---

##### `ProxyAddress`<sup>Required</sup> <a name="ProxyAddress" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.proxyAddress"></a>

```go
func ProxyAddress() *string
```

- *Type:* *string

---

##### `ProxyPort`<sup>Required</sup> <a name="ProxyPort" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.proxyPort"></a>

```go
func ProxyPort() *f64
```

- *Type:* *f64

---

##### `ProxyType`<sup>Required</sup> <a name="ProxyType" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.proxyType"></a>

```go
func ProxyType() *string
```

- *Type:* *string

---

##### `TcpKeepAlive`<sup>Required</sup> <a name="TcpKeepAlive" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.tcpKeepAlive"></a>

```go
func TcpKeepAlive() *string
```

- *Type:* *string

---

##### `TlsTimeout`<sup>Required</sup> <a name="TlsTimeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.tlsTimeout"></a>

```go
func TlsTimeout() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference.property.internalValue"></a>

```go
func InternalValue() TunnelConfigConfigIngressRuleOriginRequest
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest">TunnelConfigConfigIngressRuleOriginRequest</a>

---


### TunnelConfigConfigIngressRuleOutputReference <a name="TunnelConfigConfigIngressRuleOutputReference" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/tunnelconfig"

tunnelconfig.NewTunnelConfigConfigIngressRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) TunnelConfigConfigIngressRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.putOriginRequest">PutOriginRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.resetHostname">ResetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.resetOriginRequest">ResetOriginRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOriginRequest` <a name="PutOriginRequest" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.putOriginRequest"></a>

```go
func PutOriginRequest(value TunnelConfigConfigIngressRuleOriginRequest)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.putOriginRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest">TunnelConfigConfigIngressRuleOriginRequest</a>

---

##### `ResetHostname` <a name="ResetHostname" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.resetHostname"></a>

```go
func ResetHostname()
```

##### `ResetOriginRequest` <a name="ResetOriginRequest" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.resetOriginRequest"></a>

```go
func ResetOriginRequest()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.resetPath"></a>

```go
func ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.originRequest">OriginRequest</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference">TunnelConfigConfigIngressRuleOriginRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.originRequestInput">OriginRequestInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest">TunnelConfigConfigIngressRuleOriginRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OriginRequest`<sup>Required</sup> <a name="OriginRequest" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.originRequest"></a>

```go
func OriginRequest() TunnelConfigConfigIngressRuleOriginRequestOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequestOutputReference">TunnelConfigConfigIngressRuleOriginRequestOutputReference</a>

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `OriginRequestInput`<sup>Optional</sup> <a name="OriginRequestInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.originRequestInput"></a>

```go
func OriginRequestInput() TunnelConfigConfigIngressRuleOriginRequest
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOriginRequest">TunnelConfigConfigIngressRuleOriginRequest</a>

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TunnelConfigConfigOriginRequestAccessOutputReference <a name="TunnelConfigConfigOriginRequestAccessOutputReference" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/tunnelconfig"

tunnelconfig.NewTunnelConfigConfigOriginRequestAccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TunnelConfigConfigOriginRequestAccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.resetAudTag">ResetAudTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.resetRequired">ResetRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.resetTeamName">ResetTeamName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAudTag` <a name="ResetAudTag" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.resetAudTag"></a>

```go
func ResetAudTag()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.resetRequired"></a>

```go
func ResetRequired()
```

##### `ResetTeamName` <a name="ResetTeamName" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.resetTeamName"></a>

```go
func ResetTeamName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.property.audTagInput">AudTagInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.property.requiredInput">RequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.property.teamNameInput">TeamNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.property.audTag">AudTag</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.property.required">Required</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.property.teamName">TeamName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccess">TunnelConfigConfigOriginRequestAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AudTagInput`<sup>Optional</sup> <a name="AudTagInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.property.audTagInput"></a>

```go
func AudTagInput() *[]*string
```

- *Type:* *[]*string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.property.requiredInput"></a>

```go
func RequiredInput() interface{}
```

- *Type:* interface{}

---

##### `TeamNameInput`<sup>Optional</sup> <a name="TeamNameInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.property.teamNameInput"></a>

```go
func TeamNameInput() *string
```

- *Type:* *string

---

##### `AudTag`<sup>Required</sup> <a name="AudTag" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.property.audTag"></a>

```go
func AudTag() *[]*string
```

- *Type:* *[]*string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.property.required"></a>

```go
func Required() interface{}
```

- *Type:* interface{}

---

##### `TeamName`<sup>Required</sup> <a name="TeamName" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.property.teamName"></a>

```go
func TeamName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference.property.internalValue"></a>

```go
func InternalValue() TunnelConfigConfigOriginRequestAccess
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccess">TunnelConfigConfigOriginRequestAccess</a>

---


### TunnelConfigConfigOriginRequestIpRulesList <a name="TunnelConfigConfigOriginRequestIpRulesList" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/tunnelconfig"

tunnelconfig.NewTunnelConfigConfigOriginRequestIpRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) TunnelConfigConfigOriginRequestIpRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.get"></a>

```go
func Get(index *f64) TunnelConfigConfigOriginRequestIpRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TunnelConfigConfigOriginRequestIpRulesOutputReference <a name="TunnelConfigConfigOriginRequestIpRulesOutputReference" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/tunnelconfig"

tunnelconfig.NewTunnelConfigConfigOriginRequestIpRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) TunnelConfigConfigOriginRequestIpRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.resetAllow">ResetAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.resetPorts">ResetPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllow` <a name="ResetAllow" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.resetAllow"></a>

```go
func ResetAllow()
```

##### `ResetPorts` <a name="ResetPorts" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.resetPorts"></a>

```go
func ResetPorts()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.allowInput">AllowInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.portsInput">PortsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.allow">Allow</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.ports">Ports</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowInput`<sup>Optional</sup> <a name="AllowInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.allowInput"></a>

```go
func AllowInput() interface{}
```

- *Type:* interface{}

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.portsInput"></a>

```go
func PortsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `Allow`<sup>Required</sup> <a name="Allow" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.allow"></a>

```go
func Allow() interface{}
```

- *Type:* interface{}

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.ports"></a>

```go
func Ports() *[]*f64
```

- *Type:* *[]*f64

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TunnelConfigConfigOriginRequestOutputReference <a name="TunnelConfigConfigOriginRequestOutputReference" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/tunnelconfig"

tunnelconfig.NewTunnelConfigConfigOriginRequestOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TunnelConfigConfigOriginRequestOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.putAccess">PutAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.putIpRules">PutIpRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetAccess">ResetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetBastionMode">ResetBastionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetCaPool">ResetCaPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetConnectTimeout">ResetConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetDisableChunkedEncoding">ResetDisableChunkedEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetHttp2Origin">ResetHttp2Origin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetHttpHostHeader">ResetHttpHostHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetIpRules">ResetIpRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetKeepAliveConnections">ResetKeepAliveConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetKeepAliveTimeout">ResetKeepAliveTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetNoHappyEyeballs">ResetNoHappyEyeballs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetNoTlsVerify">ResetNoTlsVerify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetOriginServerName">ResetOriginServerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetProxyAddress">ResetProxyAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetProxyPort">ResetProxyPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetProxyType">ResetProxyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetTcpKeepAlive">ResetTcpKeepAlive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetTlsTimeout">ResetTlsTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccess` <a name="PutAccess" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.putAccess"></a>

```go
func PutAccess(value TunnelConfigConfigOriginRequestAccess)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.putAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccess">TunnelConfigConfigOriginRequestAccess</a>

---

##### `PutIpRules` <a name="PutIpRules" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.putIpRules"></a>

```go
func PutIpRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.putIpRules.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccess` <a name="ResetAccess" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetAccess"></a>

```go
func ResetAccess()
```

##### `ResetBastionMode` <a name="ResetBastionMode" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetBastionMode"></a>

```go
func ResetBastionMode()
```

##### `ResetCaPool` <a name="ResetCaPool" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetCaPool"></a>

```go
func ResetCaPool()
```

##### `ResetConnectTimeout` <a name="ResetConnectTimeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetConnectTimeout"></a>

```go
func ResetConnectTimeout()
```

##### `ResetDisableChunkedEncoding` <a name="ResetDisableChunkedEncoding" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetDisableChunkedEncoding"></a>

```go
func ResetDisableChunkedEncoding()
```

##### `ResetHttp2Origin` <a name="ResetHttp2Origin" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetHttp2Origin"></a>

```go
func ResetHttp2Origin()
```

##### `ResetHttpHostHeader` <a name="ResetHttpHostHeader" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetHttpHostHeader"></a>

```go
func ResetHttpHostHeader()
```

##### `ResetIpRules` <a name="ResetIpRules" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetIpRules"></a>

```go
func ResetIpRules()
```

##### `ResetKeepAliveConnections` <a name="ResetKeepAliveConnections" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetKeepAliveConnections"></a>

```go
func ResetKeepAliveConnections()
```

##### `ResetKeepAliveTimeout` <a name="ResetKeepAliveTimeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetKeepAliveTimeout"></a>

```go
func ResetKeepAliveTimeout()
```

##### `ResetNoHappyEyeballs` <a name="ResetNoHappyEyeballs" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetNoHappyEyeballs"></a>

```go
func ResetNoHappyEyeballs()
```

##### `ResetNoTlsVerify` <a name="ResetNoTlsVerify" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetNoTlsVerify"></a>

```go
func ResetNoTlsVerify()
```

##### `ResetOriginServerName` <a name="ResetOriginServerName" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetOriginServerName"></a>

```go
func ResetOriginServerName()
```

##### `ResetProxyAddress` <a name="ResetProxyAddress" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetProxyAddress"></a>

```go
func ResetProxyAddress()
```

##### `ResetProxyPort` <a name="ResetProxyPort" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetProxyPort"></a>

```go
func ResetProxyPort()
```

##### `ResetProxyType` <a name="ResetProxyType" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetProxyType"></a>

```go
func ResetProxyType()
```

##### `ResetTcpKeepAlive` <a name="ResetTcpKeepAlive" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetTcpKeepAlive"></a>

```go
func ResetTcpKeepAlive()
```

##### `ResetTlsTimeout` <a name="ResetTlsTimeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetTlsTimeout"></a>

```go
func ResetTlsTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.access">Access</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference">TunnelConfigConfigOriginRequestAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.ipRules">IpRules</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList">TunnelConfigConfigOriginRequestIpRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.accessInput">AccessInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccess">TunnelConfigConfigOriginRequestAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.bastionModeInput">BastionModeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.caPoolInput">CaPoolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.connectTimeoutInput">ConnectTimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.disableChunkedEncodingInput">DisableChunkedEncodingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.http2OriginInput">Http2OriginInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.httpHostHeaderInput">HttpHostHeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.ipRulesInput">IpRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.keepAliveConnectionsInput">KeepAliveConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.keepAliveTimeoutInput">KeepAliveTimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.noHappyEyeballsInput">NoHappyEyeballsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.noTlsVerifyInput">NoTlsVerifyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.originServerNameInput">OriginServerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyAddressInput">ProxyAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyPortInput">ProxyPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyTypeInput">ProxyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.tcpKeepAliveInput">TcpKeepAliveInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.tlsTimeoutInput">TlsTimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.bastionMode">BastionMode</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.caPool">CaPool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.connectTimeout">ConnectTimeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.disableChunkedEncoding">DisableChunkedEncoding</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.http2Origin">Http2Origin</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.httpHostHeader">HttpHostHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.keepAliveConnections">KeepAliveConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.keepAliveTimeout">KeepAliveTimeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.noHappyEyeballs">NoHappyEyeballs</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.noTlsVerify">NoTlsVerify</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.originServerName">OriginServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyAddress">ProxyAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyPort">ProxyPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyType">ProxyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.tcpKeepAlive">TcpKeepAlive</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.tlsTimeout">TlsTimeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest">TunnelConfigConfigOriginRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Access`<sup>Required</sup> <a name="Access" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.access"></a>

```go
func Access() TunnelConfigConfigOriginRequestAccessOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccessOutputReference">TunnelConfigConfigOriginRequestAccessOutputReference</a>

---

##### `IpRules`<sup>Required</sup> <a name="IpRules" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.ipRules"></a>

```go
func IpRules() TunnelConfigConfigOriginRequestIpRulesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList">TunnelConfigConfigOriginRequestIpRulesList</a>

---

##### `AccessInput`<sup>Optional</sup> <a name="AccessInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.accessInput"></a>

```go
func AccessInput() TunnelConfigConfigOriginRequestAccess
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestAccess">TunnelConfigConfigOriginRequestAccess</a>

---

##### `BastionModeInput`<sup>Optional</sup> <a name="BastionModeInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.bastionModeInput"></a>

```go
func BastionModeInput() interface{}
```

- *Type:* interface{}

---

##### `CaPoolInput`<sup>Optional</sup> <a name="CaPoolInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.caPoolInput"></a>

```go
func CaPoolInput() *string
```

- *Type:* *string

---

##### `ConnectTimeoutInput`<sup>Optional</sup> <a name="ConnectTimeoutInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.connectTimeoutInput"></a>

```go
func ConnectTimeoutInput() *string
```

- *Type:* *string

---

##### `DisableChunkedEncodingInput`<sup>Optional</sup> <a name="DisableChunkedEncodingInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.disableChunkedEncodingInput"></a>

```go
func DisableChunkedEncodingInput() interface{}
```

- *Type:* interface{}

---

##### `Http2OriginInput`<sup>Optional</sup> <a name="Http2OriginInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.http2OriginInput"></a>

```go
func Http2OriginInput() interface{}
```

- *Type:* interface{}

---

##### `HttpHostHeaderInput`<sup>Optional</sup> <a name="HttpHostHeaderInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.httpHostHeaderInput"></a>

```go
func HttpHostHeaderInput() *string
```

- *Type:* *string

---

##### `IpRulesInput`<sup>Optional</sup> <a name="IpRulesInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.ipRulesInput"></a>

```go
func IpRulesInput() interface{}
```

- *Type:* interface{}

---

##### `KeepAliveConnectionsInput`<sup>Optional</sup> <a name="KeepAliveConnectionsInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.keepAliveConnectionsInput"></a>

```go
func KeepAliveConnectionsInput() *f64
```

- *Type:* *f64

---

##### `KeepAliveTimeoutInput`<sup>Optional</sup> <a name="KeepAliveTimeoutInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.keepAliveTimeoutInput"></a>

```go
func KeepAliveTimeoutInput() *string
```

- *Type:* *string

---

##### `NoHappyEyeballsInput`<sup>Optional</sup> <a name="NoHappyEyeballsInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.noHappyEyeballsInput"></a>

```go
func NoHappyEyeballsInput() interface{}
```

- *Type:* interface{}

---

##### `NoTlsVerifyInput`<sup>Optional</sup> <a name="NoTlsVerifyInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.noTlsVerifyInput"></a>

```go
func NoTlsVerifyInput() interface{}
```

- *Type:* interface{}

---

##### `OriginServerNameInput`<sup>Optional</sup> <a name="OriginServerNameInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.originServerNameInput"></a>

```go
func OriginServerNameInput() *string
```

- *Type:* *string

---

##### `ProxyAddressInput`<sup>Optional</sup> <a name="ProxyAddressInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyAddressInput"></a>

```go
func ProxyAddressInput() *string
```

- *Type:* *string

---

##### `ProxyPortInput`<sup>Optional</sup> <a name="ProxyPortInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyPortInput"></a>

```go
func ProxyPortInput() *f64
```

- *Type:* *f64

---

##### `ProxyTypeInput`<sup>Optional</sup> <a name="ProxyTypeInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyTypeInput"></a>

```go
func ProxyTypeInput() *string
```

- *Type:* *string

---

##### `TcpKeepAliveInput`<sup>Optional</sup> <a name="TcpKeepAliveInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.tcpKeepAliveInput"></a>

```go
func TcpKeepAliveInput() *string
```

- *Type:* *string

---

##### `TlsTimeoutInput`<sup>Optional</sup> <a name="TlsTimeoutInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.tlsTimeoutInput"></a>

```go
func TlsTimeoutInput() *string
```

- *Type:* *string

---

##### `BastionMode`<sup>Required</sup> <a name="BastionMode" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.bastionMode"></a>

```go
func BastionMode() interface{}
```

- *Type:* interface{}

---

##### `CaPool`<sup>Required</sup> <a name="CaPool" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.caPool"></a>

```go
func CaPool() *string
```

- *Type:* *string

---

##### `ConnectTimeout`<sup>Required</sup> <a name="ConnectTimeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.connectTimeout"></a>

```go
func ConnectTimeout() *string
```

- *Type:* *string

---

##### `DisableChunkedEncoding`<sup>Required</sup> <a name="DisableChunkedEncoding" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.disableChunkedEncoding"></a>

```go
func DisableChunkedEncoding() interface{}
```

- *Type:* interface{}

---

##### `Http2Origin`<sup>Required</sup> <a name="Http2Origin" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.http2Origin"></a>

```go
func Http2Origin() interface{}
```

- *Type:* interface{}

---

##### `HttpHostHeader`<sup>Required</sup> <a name="HttpHostHeader" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.httpHostHeader"></a>

```go
func HttpHostHeader() *string
```

- *Type:* *string

---

##### `KeepAliveConnections`<sup>Required</sup> <a name="KeepAliveConnections" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.keepAliveConnections"></a>

```go
func KeepAliveConnections() *f64
```

- *Type:* *f64

---

##### `KeepAliveTimeout`<sup>Required</sup> <a name="KeepAliveTimeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.keepAliveTimeout"></a>

```go
func KeepAliveTimeout() *string
```

- *Type:* *string

---

##### `NoHappyEyeballs`<sup>Required</sup> <a name="NoHappyEyeballs" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.noHappyEyeballs"></a>

```go
func NoHappyEyeballs() interface{}
```

- *Type:* interface{}

---

##### `NoTlsVerify`<sup>Required</sup> <a name="NoTlsVerify" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.noTlsVerify"></a>

```go
func NoTlsVerify() interface{}
```

- *Type:* interface{}

---

##### `OriginServerName`<sup>Required</sup> <a name="OriginServerName" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.originServerName"></a>

```go
func OriginServerName() *string
```

- *Type:* *string

---

##### `ProxyAddress`<sup>Required</sup> <a name="ProxyAddress" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyAddress"></a>

```go
func ProxyAddress() *string
```

- *Type:* *string

---

##### `ProxyPort`<sup>Required</sup> <a name="ProxyPort" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyPort"></a>

```go
func ProxyPort() *f64
```

- *Type:* *f64

---

##### `ProxyType`<sup>Required</sup> <a name="ProxyType" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyType"></a>

```go
func ProxyType() *string
```

- *Type:* *string

---

##### `TcpKeepAlive`<sup>Required</sup> <a name="TcpKeepAlive" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.tcpKeepAlive"></a>

```go
func TcpKeepAlive() *string
```

- *Type:* *string

---

##### `TlsTimeout`<sup>Required</sup> <a name="TlsTimeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.tlsTimeout"></a>

```go
func TlsTimeout() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.internalValue"></a>

```go
func InternalValue() TunnelConfigConfigOriginRequest
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest">TunnelConfigConfigOriginRequest</a>

---


### TunnelConfigConfigOutputReference <a name="TunnelConfigConfigOutputReference" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/tunnelconfig"

tunnelconfig.NewTunnelConfigConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TunnelConfigConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.putIngressRule">PutIngressRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.putOriginRequest">PutOriginRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.putWarpRouting">PutWarpRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.resetOriginRequest">ResetOriginRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.resetWarpRouting">ResetWarpRouting</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIngressRule` <a name="PutIngressRule" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.putIngressRule"></a>

```go
func PutIngressRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.putIngressRule.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOriginRequest` <a name="PutOriginRequest" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.putOriginRequest"></a>

```go
func PutOriginRequest(value TunnelConfigConfigOriginRequest)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.putOriginRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest">TunnelConfigConfigOriginRequest</a>

---

##### `PutWarpRouting` <a name="PutWarpRouting" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.putWarpRouting"></a>

```go
func PutWarpRouting(value TunnelConfigConfigWarpRouting)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.putWarpRouting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting">TunnelConfigConfigWarpRouting</a>

---

##### `ResetOriginRequest` <a name="ResetOriginRequest" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.resetOriginRequest"></a>

```go
func ResetOriginRequest()
```

##### `ResetWarpRouting` <a name="ResetWarpRouting" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.resetWarpRouting"></a>

```go
func ResetWarpRouting()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.property.ingressRule">IngressRule</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList">TunnelConfigConfigIngressRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.property.originRequest">OriginRequest</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference">TunnelConfigConfigOriginRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.property.warpRouting">WarpRouting</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference">TunnelConfigConfigWarpRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.property.ingressRuleInput">IngressRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.property.originRequestInput">OriginRequestInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest">TunnelConfigConfigOriginRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.property.warpRoutingInput">WarpRoutingInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting">TunnelConfigConfigWarpRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig">TunnelConfigConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IngressRule`<sup>Required</sup> <a name="IngressRule" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.property.ingressRule"></a>

```go
func IngressRule() TunnelConfigConfigIngressRuleList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList">TunnelConfigConfigIngressRuleList</a>

---

##### `OriginRequest`<sup>Required</sup> <a name="OriginRequest" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.property.originRequest"></a>

```go
func OriginRequest() TunnelConfigConfigOriginRequestOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference">TunnelConfigConfigOriginRequestOutputReference</a>

---

##### `WarpRouting`<sup>Required</sup> <a name="WarpRouting" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.property.warpRouting"></a>

```go
func WarpRouting() TunnelConfigConfigWarpRoutingOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference">TunnelConfigConfigWarpRoutingOutputReference</a>

---

##### `IngressRuleInput`<sup>Optional</sup> <a name="IngressRuleInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.property.ingressRuleInput"></a>

```go
func IngressRuleInput() interface{}
```

- *Type:* interface{}

---

##### `OriginRequestInput`<sup>Optional</sup> <a name="OriginRequestInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.property.originRequestInput"></a>

```go
func OriginRequestInput() TunnelConfigConfigOriginRequest
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest">TunnelConfigConfigOriginRequest</a>

---

##### `WarpRoutingInput`<sup>Optional</sup> <a name="WarpRoutingInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.property.warpRoutingInput"></a>

```go
func WarpRoutingInput() TunnelConfigConfigWarpRouting
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting">TunnelConfigConfigWarpRouting</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() TunnelConfigConfig
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig">TunnelConfigConfig</a>

---


### TunnelConfigConfigWarpRoutingOutputReference <a name="TunnelConfigConfigWarpRoutingOutputReference" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/tunnelconfig"

tunnelconfig.NewTunnelConfigConfigWarpRoutingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TunnelConfigConfigWarpRoutingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting">TunnelConfigConfigWarpRouting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.property.internalValue"></a>

```go
func InternalValue() TunnelConfigConfigWarpRouting
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting">TunnelConfigConfigWarpRouting</a>

---



