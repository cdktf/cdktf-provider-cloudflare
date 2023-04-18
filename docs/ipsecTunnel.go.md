# `cloudflare_ipsec_tunnel`

Refer to the Terraform Registory for docs: [`cloudflare_ipsec_tunnel`](https://www.terraform.io/docs/providers/cloudflare/r/ipsec_tunnel).

# `ipsecTunnel` Submodule <a name="`ipsecTunnel` Submodule" id="@cdktf/provider-cloudflare.ipsecTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IpsecTunnel <a name="IpsecTunnel" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel"></a>

Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/ipsec_tunnel cloudflare_ipsec_tunnel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v6/ipsectunnel"

ipsectunnel.NewIpsecTunnel(scope Construct, id *string, config IpsecTunnelConfig) IpsecTunnel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig">IpsecTunnelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig">IpsecTunnelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetAllowNullCipher">ResetAllowNullCipher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetFqdnId">ResetFqdnId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetHealthCheckEnabled">ResetHealthCheckEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetHealthCheckTarget">ResetHealthCheckTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetHealthCheckType">ResetHealthCheckType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetHexId">ResetHexId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetPsk">ResetPsk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetRemoteId">ResetRemoteId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetUserId">ResetUserId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetAllowNullCipher` <a name="ResetAllowNullCipher" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetAllowNullCipher"></a>

```go
func ResetAllowNullCipher()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFqdnId` <a name="ResetFqdnId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetFqdnId"></a>

```go
func ResetFqdnId()
```

##### `ResetHealthCheckEnabled` <a name="ResetHealthCheckEnabled" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetHealthCheckEnabled"></a>

```go
func ResetHealthCheckEnabled()
```

##### `ResetHealthCheckTarget` <a name="ResetHealthCheckTarget" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetHealthCheckTarget"></a>

```go
func ResetHealthCheckTarget()
```

##### `ResetHealthCheckType` <a name="ResetHealthCheckType" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetHealthCheckType"></a>

```go
func ResetHealthCheckType()
```

##### `ResetHexId` <a name="ResetHexId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetHexId"></a>

```go
func ResetHexId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetId"></a>

```go
func ResetId()
```

##### `ResetPsk` <a name="ResetPsk" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetPsk"></a>

```go
func ResetPsk()
```

##### `ResetRemoteId` <a name="ResetRemoteId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetRemoteId"></a>

```go
func ResetRemoteId()
```

##### `ResetUserId` <a name="ResetUserId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetUserId"></a>

```go
func ResetUserId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v6/ipsectunnel"

ipsectunnel.IpsecTunnel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v6/ipsectunnel"

ipsectunnel.IpsecTunnel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v6/ipsectunnel"

ipsectunnel.IpsecTunnel_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.allowNullCipherInput">AllowNullCipherInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.cloudflareEndpointInput">CloudflareEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.customerEndpointInput">CustomerEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.fqdnIdInput">FqdnIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckEnabledInput">HealthCheckEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckTargetInput">HealthCheckTargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckTypeInput">HealthCheckTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.hexIdInput">HexIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.interfaceAddressInput">InterfaceAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.pskInput">PskInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.remoteIdInput">RemoteIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.userIdInput">UserIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.allowNullCipher">AllowNullCipher</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.cloudflareEndpoint">CloudflareEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.customerEndpoint">CustomerEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.fqdnId">FqdnId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckEnabled">HealthCheckEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckTarget">HealthCheckTarget</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckType">HealthCheckType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.hexId">HexId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.interfaceAddress">InterfaceAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.psk">Psk</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.remoteId">RemoteId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.userId">UserId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AllowNullCipherInput`<sup>Optional</sup> <a name="AllowNullCipherInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.allowNullCipherInput"></a>

```go
func AllowNullCipherInput() interface{}
```

- *Type:* interface{}

---

##### `CloudflareEndpointInput`<sup>Optional</sup> <a name="CloudflareEndpointInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.cloudflareEndpointInput"></a>

```go
func CloudflareEndpointInput() *string
```

- *Type:* *string

---

##### `CustomerEndpointInput`<sup>Optional</sup> <a name="CustomerEndpointInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.customerEndpointInput"></a>

```go
func CustomerEndpointInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FqdnIdInput`<sup>Optional</sup> <a name="FqdnIdInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.fqdnIdInput"></a>

```go
func FqdnIdInput() *string
```

- *Type:* *string

---

##### `HealthCheckEnabledInput`<sup>Optional</sup> <a name="HealthCheckEnabledInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckEnabledInput"></a>

```go
func HealthCheckEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `HealthCheckTargetInput`<sup>Optional</sup> <a name="HealthCheckTargetInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckTargetInput"></a>

```go
func HealthCheckTargetInput() *string
```

- *Type:* *string

---

##### `HealthCheckTypeInput`<sup>Optional</sup> <a name="HealthCheckTypeInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckTypeInput"></a>

```go
func HealthCheckTypeInput() *string
```

- *Type:* *string

---

##### `HexIdInput`<sup>Optional</sup> <a name="HexIdInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.hexIdInput"></a>

```go
func HexIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InterfaceAddressInput`<sup>Optional</sup> <a name="InterfaceAddressInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.interfaceAddressInput"></a>

```go
func InterfaceAddressInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PskInput`<sup>Optional</sup> <a name="PskInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.pskInput"></a>

```go
func PskInput() *string
```

- *Type:* *string

---

##### `RemoteIdInput`<sup>Optional</sup> <a name="RemoteIdInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.remoteIdInput"></a>

```go
func RemoteIdInput() *string
```

- *Type:* *string

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.userIdInput"></a>

```go
func UserIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `AllowNullCipher`<sup>Required</sup> <a name="AllowNullCipher" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.allowNullCipher"></a>

```go
func AllowNullCipher() interface{}
```

- *Type:* interface{}

---

##### `CloudflareEndpoint`<sup>Required</sup> <a name="CloudflareEndpoint" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.cloudflareEndpoint"></a>

```go
func CloudflareEndpoint() *string
```

- *Type:* *string

---

##### `CustomerEndpoint`<sup>Required</sup> <a name="CustomerEndpoint" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.customerEndpoint"></a>

```go
func CustomerEndpoint() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FqdnId`<sup>Required</sup> <a name="FqdnId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.fqdnId"></a>

```go
func FqdnId() *string
```

- *Type:* *string

---

##### `HealthCheckEnabled`<sup>Required</sup> <a name="HealthCheckEnabled" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckEnabled"></a>

```go
func HealthCheckEnabled() interface{}
```

- *Type:* interface{}

---

##### `HealthCheckTarget`<sup>Required</sup> <a name="HealthCheckTarget" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckTarget"></a>

```go
func HealthCheckTarget() *string
```

- *Type:* *string

---

##### `HealthCheckType`<sup>Required</sup> <a name="HealthCheckType" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckType"></a>

```go
func HealthCheckType() *string
```

- *Type:* *string

---

##### `HexId`<sup>Required</sup> <a name="HexId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.hexId"></a>

```go
func HexId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InterfaceAddress`<sup>Required</sup> <a name="InterfaceAddress" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.interfaceAddress"></a>

```go
func InterfaceAddress() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Psk`<sup>Required</sup> <a name="Psk" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.psk"></a>

```go
func Psk() *string
```

- *Type:* *string

---

##### `RemoteId`<sup>Required</sup> <a name="RemoteId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.remoteId"></a>

```go
func RemoteId() *string
```

- *Type:* *string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.userId"></a>

```go
func UserId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IpsecTunnelConfig <a name="IpsecTunnelConfig" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v6/ipsectunnel"

&ipsectunnel.IpsecTunnelConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CloudflareEndpoint: *string,
	CustomerEndpoint: *string,
	InterfaceAddress: *string,
	Name: *string,
	AccountId: *string,
	AllowNullCipher: interface{},
	Description: *string,
	FqdnId: *string,
	HealthCheckEnabled: interface{},
	HealthCheckTarget: *string,
	HealthCheckType: *string,
	HexId: *string,
	Id: *string,
	Psk: *string,
	RemoteId: *string,
	UserId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.cloudflareEndpoint">CloudflareEndpoint</a></code> | <code>*string</code> | IP address assigned to the Cloudflare side of the IPsec tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.customerEndpoint">CustomerEndpoint</a></code> | <code>*string</code> | IP address assigned to the customer side of the IPsec tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.interfaceAddress">InterfaceAddress</a></code> | <code>*string</code> | 31-bit prefix (/31 in CIDR notation) supporting 2 hosts, one for each side of the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.name">Name</a></code> | <code>*string</code> | Name of the IPsec tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.accountId">AccountId</a></code> | <code>*string</code> | The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.allowNullCipher">AllowNullCipher</a></code> | <code>interface{}</code> | Specifies if this tunnel may use a null cipher (ENCR_NULL) in Phase 2. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of the IPsec tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.fqdnId">FqdnId</a></code> | <code>*string</code> | `remote_id` in the form of a fqdn. This value is generated by cloudflare. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.healthCheckEnabled">HealthCheckEnabled</a></code> | <code>interface{}</code> | Specifies if ICMP tunnel health checks are enabled. Default: `true`. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.healthCheckTarget">HealthCheckTarget</a></code> | <code>*string</code> | The IP address of the customer endpoint that will receive tunnel health checks. Default: `<customer_gre_endpoint>`. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.healthCheckType">HealthCheckType</a></code> | <code>*string</code> | Specifies the ICMP echo type for the health check (`request` or `reply`). Available values: `request`, `reply` Default: `reply`. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.hexId">HexId</a></code> | <code>*string</code> | `remote_id` as a hex string. This value is generated by cloudflare. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ipsec_tunnel#id IpsecTunnel#id}. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.psk">Psk</a></code> | <code>*string</code> | Pre shared key to be used with the IPsec tunnel. If left unset, it will be autogenerated. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.remoteId">RemoteId</a></code> | <code>*string</code> | ID to be used while setting up the IPsec tunnel. This value is generated by cloudflare. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.userId">UserId</a></code> | <code>*string</code> | `remote_id` in the form of an email address. This value is generated by cloudflare. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CloudflareEndpoint`<sup>Required</sup> <a name="CloudflareEndpoint" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.cloudflareEndpoint"></a>

```go
CloudflareEndpoint *string
```

- *Type:* *string

IP address assigned to the Cloudflare side of the IPsec tunnel.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ipsec_tunnel#cloudflare_endpoint IpsecTunnel#cloudflare_endpoint}

---

##### `CustomerEndpoint`<sup>Required</sup> <a name="CustomerEndpoint" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.customerEndpoint"></a>

```go
CustomerEndpoint *string
```

- *Type:* *string

IP address assigned to the customer side of the IPsec tunnel.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ipsec_tunnel#customer_endpoint IpsecTunnel#customer_endpoint}

---

##### `InterfaceAddress`<sup>Required</sup> <a name="InterfaceAddress" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.interfaceAddress"></a>

```go
InterfaceAddress *string
```

- *Type:* *string

31-bit prefix (/31 in CIDR notation) supporting 2 hosts, one for each side of the tunnel.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ipsec_tunnel#interface_address IpsecTunnel#interface_address}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the IPsec tunnel.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ipsec_tunnel#name IpsecTunnel#name}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ipsec_tunnel#account_id IpsecTunnel#account_id}

---

##### `AllowNullCipher`<sup>Optional</sup> <a name="AllowNullCipher" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.allowNullCipher"></a>

```go
AllowNullCipher interface{}
```

- *Type:* interface{}

Specifies if this tunnel may use a null cipher (ENCR_NULL) in Phase 2. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ipsec_tunnel#allow_null_cipher IpsecTunnel#allow_null_cipher}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of the IPsec tunnel.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ipsec_tunnel#description IpsecTunnel#description}

---

##### `FqdnId`<sup>Optional</sup> <a name="FqdnId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.fqdnId"></a>

```go
FqdnId *string
```

- *Type:* *string

`remote_id` in the form of a fqdn. This value is generated by cloudflare.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ipsec_tunnel#fqdn_id IpsecTunnel#fqdn_id}

---

##### `HealthCheckEnabled`<sup>Optional</sup> <a name="HealthCheckEnabled" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.healthCheckEnabled"></a>

```go
HealthCheckEnabled interface{}
```

- *Type:* interface{}

Specifies if ICMP tunnel health checks are enabled. Default: `true`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ipsec_tunnel#health_check_enabled IpsecTunnel#health_check_enabled}

---

##### `HealthCheckTarget`<sup>Optional</sup> <a name="HealthCheckTarget" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.healthCheckTarget"></a>

```go
HealthCheckTarget *string
```

- *Type:* *string

The IP address of the customer endpoint that will receive tunnel health checks. Default: `<customer_gre_endpoint>`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ipsec_tunnel#health_check_target IpsecTunnel#health_check_target}

---

##### `HealthCheckType`<sup>Optional</sup> <a name="HealthCheckType" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.healthCheckType"></a>

```go
HealthCheckType *string
```

- *Type:* *string

Specifies the ICMP echo type for the health check (`request` or `reply`). Available values: `request`, `reply` Default: `reply`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ipsec_tunnel#health_check_type IpsecTunnel#health_check_type}

---

##### `HexId`<sup>Optional</sup> <a name="HexId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.hexId"></a>

```go
HexId *string
```

- *Type:* *string

`remote_id` as a hex string. This value is generated by cloudflare.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ipsec_tunnel#hex_id IpsecTunnel#hex_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ipsec_tunnel#id IpsecTunnel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Psk`<sup>Optional</sup> <a name="Psk" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.psk"></a>

```go
Psk *string
```

- *Type:* *string

Pre shared key to be used with the IPsec tunnel. If left unset, it will be autogenerated.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ipsec_tunnel#psk IpsecTunnel#psk}

---

##### `RemoteId`<sup>Optional</sup> <a name="RemoteId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.remoteId"></a>

```go
RemoteId *string
```

- *Type:* *string

ID to be used while setting up the IPsec tunnel. This value is generated by cloudflare.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ipsec_tunnel#remote_id IpsecTunnel#remote_id}

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.userId"></a>

```go
UserId *string
```

- *Type:* *string

`remote_id` in the form of an email address. This value is generated by cloudflare.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ipsec_tunnel#user_id IpsecTunnel#user_id}

---



