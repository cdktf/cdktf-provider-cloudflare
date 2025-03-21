# `magicWanIpsecTunnel` Submodule <a name="`magicWanIpsecTunnel` Submodule" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MagicWanIpsecTunnel <a name="MagicWanIpsecTunnel" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel cloudflare_magic_wan_ipsec_tunnel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/magicwanipsectunnel"

magicwanipsectunnel.NewMagicWanIpsecTunnel(scope Construct, id *string, config MagicWanIpsecTunnelConfig) MagicWanIpsecTunnel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig">MagicWanIpsecTunnelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig">MagicWanIpsecTunnelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.putHealthCheck">PutHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetCustomerEndpoint">ResetCustomerEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetHealthCheck">ResetHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetIpsecTunnelId">ResetIpsecTunnelId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetPsk">ResetPsk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetReplayProtection">ResetReplayProtection</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutHealthCheck` <a name="PutHealthCheck" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.putHealthCheck"></a>

```go
func PutHealthCheck(value MagicWanIpsecTunnelHealthCheck)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.putHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck">MagicWanIpsecTunnelHealthCheck</a>

---

##### `ResetCustomerEndpoint` <a name="ResetCustomerEndpoint" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetCustomerEndpoint"></a>

```go
func ResetCustomerEndpoint()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetHealthCheck` <a name="ResetHealthCheck" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetHealthCheck"></a>

```go
func ResetHealthCheck()
```

##### `ResetIpsecTunnelId` <a name="ResetIpsecTunnelId" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetIpsecTunnelId"></a>

```go
func ResetIpsecTunnelId()
```

##### `ResetPsk` <a name="ResetPsk" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetPsk"></a>

```go
func ResetPsk()
```

##### `ResetReplayProtection` <a name="ResetReplayProtection" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetReplayProtection"></a>

```go
func ResetReplayProtection()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MagicWanIpsecTunnel resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/magicwanipsectunnel"

magicwanipsectunnel.MagicWanIpsecTunnel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/magicwanipsectunnel"

magicwanipsectunnel.MagicWanIpsecTunnel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/magicwanipsectunnel"

magicwanipsectunnel.MagicWanIpsecTunnel_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/magicwanipsectunnel"

magicwanipsectunnel.MagicWanIpsecTunnel_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MagicWanIpsecTunnel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MagicWanIpsecTunnel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MagicWanIpsecTunnel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MagicWanIpsecTunnel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.healthCheck">HealthCheck</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference">MagicWanIpsecTunnelHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.ipsecTunnel">IpsecTunnel</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference">MagicWanIpsecTunnelIpsecTunnelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.ipsecTunnels">IpsecTunnels</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList">MagicWanIpsecTunnelIpsecTunnelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.modified">Modified</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.modifiedIpsecTunnel">ModifiedIpsecTunnel</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference">MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.cloudflareEndpointInput">CloudflareEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.customerEndpointInput">CustomerEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.healthCheckInput">HealthCheckInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.interfaceAddressInput">InterfaceAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.ipsecTunnelIdInput">IpsecTunnelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.pskInput">PskInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.replayProtectionInput">ReplayProtectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.cloudflareEndpoint">CloudflareEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.customerEndpoint">CustomerEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.interfaceAddress">InterfaceAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.ipsecTunnelId">IpsecTunnelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.psk">Psk</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.replayProtection">ReplayProtection</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `HealthCheck`<sup>Required</sup> <a name="HealthCheck" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.healthCheck"></a>

```go
func HealthCheck() MagicWanIpsecTunnelHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference">MagicWanIpsecTunnelHealthCheckOutputReference</a>

---

##### `IpsecTunnel`<sup>Required</sup> <a name="IpsecTunnel" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.ipsecTunnel"></a>

```go
func IpsecTunnel() MagicWanIpsecTunnelIpsecTunnelOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference">MagicWanIpsecTunnelIpsecTunnelOutputReference</a>

---

##### `IpsecTunnels`<sup>Required</sup> <a name="IpsecTunnels" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.ipsecTunnels"></a>

```go
func IpsecTunnels() MagicWanIpsecTunnelIpsecTunnelsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList">MagicWanIpsecTunnelIpsecTunnelsList</a>

---

##### `Modified`<sup>Required</sup> <a name="Modified" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.modified"></a>

```go
func Modified() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ModifiedIpsecTunnel`<sup>Required</sup> <a name="ModifiedIpsecTunnel" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.modifiedIpsecTunnel"></a>

```go
func ModifiedIpsecTunnel() MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference">MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `CloudflareEndpointInput`<sup>Optional</sup> <a name="CloudflareEndpointInput" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.cloudflareEndpointInput"></a>

```go
func CloudflareEndpointInput() *string
```

- *Type:* *string

---

##### `CustomerEndpointInput`<sup>Optional</sup> <a name="CustomerEndpointInput" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.customerEndpointInput"></a>

```go
func CustomerEndpointInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `HealthCheckInput`<sup>Optional</sup> <a name="HealthCheckInput" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.healthCheckInput"></a>

```go
func HealthCheckInput() interface{}
```

- *Type:* interface{}

---

##### `InterfaceAddressInput`<sup>Optional</sup> <a name="InterfaceAddressInput" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.interfaceAddressInput"></a>

```go
func InterfaceAddressInput() *string
```

- *Type:* *string

---

##### `IpsecTunnelIdInput`<sup>Optional</sup> <a name="IpsecTunnelIdInput" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.ipsecTunnelIdInput"></a>

```go
func IpsecTunnelIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PskInput`<sup>Optional</sup> <a name="PskInput" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.pskInput"></a>

```go
func PskInput() *string
```

- *Type:* *string

---

##### `ReplayProtectionInput`<sup>Optional</sup> <a name="ReplayProtectionInput" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.replayProtectionInput"></a>

```go
func ReplayProtectionInput() interface{}
```

- *Type:* interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `CloudflareEndpoint`<sup>Required</sup> <a name="CloudflareEndpoint" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.cloudflareEndpoint"></a>

```go
func CloudflareEndpoint() *string
```

- *Type:* *string

---

##### `CustomerEndpoint`<sup>Required</sup> <a name="CustomerEndpoint" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.customerEndpoint"></a>

```go
func CustomerEndpoint() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `InterfaceAddress`<sup>Required</sup> <a name="InterfaceAddress" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.interfaceAddress"></a>

```go
func InterfaceAddress() *string
```

- *Type:* *string

---

##### `IpsecTunnelId`<sup>Required</sup> <a name="IpsecTunnelId" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.ipsecTunnelId"></a>

```go
func IpsecTunnelId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Psk`<sup>Required</sup> <a name="Psk" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.psk"></a>

```go
func Psk() *string
```

- *Type:* *string

---

##### `ReplayProtection`<sup>Required</sup> <a name="ReplayProtection" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.replayProtection"></a>

```go
func ReplayProtection() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MagicWanIpsecTunnelConfig <a name="MagicWanIpsecTunnelConfig" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/magicwanipsectunnel"

&magicwanipsectunnel.MagicWanIpsecTunnelConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	CloudflareEndpoint: *string,
	InterfaceAddress: *string,
	Name: *string,
	CustomerEndpoint: *string,
	Description: *string,
	HealthCheck: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck,
	IpsecTunnelId: *string,
	Psk: *string,
	ReplayProtection: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.cloudflareEndpoint">CloudflareEndpoint</a></code> | <code>*string</code> | The IP address assigned to the Cloudflare side of the IPsec tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.interfaceAddress">InterfaceAddress</a></code> | <code>*string</code> | A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for each side of the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.name">Name</a></code> | <code>*string</code> | The name of the IPsec tunnel. The name cannot share a name with other tunnels. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.customerEndpoint">CustomerEndpoint</a></code> | <code>*string</code> | The IP address assigned to the customer side of the IPsec tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.description">Description</a></code> | <code>*string</code> | An optional description forthe IPsec tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.healthCheck">HealthCheck</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck">MagicWanIpsecTunnelHealthCheck</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#health_check MagicWanIpsecTunnel#health_check}. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.ipsecTunnelId">IpsecTunnelId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.psk">Psk</a></code> | <code>*string</code> | A randomly generated or provided string for use in the IPsec tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.replayProtection">ReplayProtection</a></code> | <code>interface{}</code> | If `true`, then IPsec replay protection will be supported in the Cloudflare-to-customer direction. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#account_id MagicWanIpsecTunnel#account_id}

---

##### `CloudflareEndpoint`<sup>Required</sup> <a name="CloudflareEndpoint" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.cloudflareEndpoint"></a>

```go
CloudflareEndpoint *string
```

- *Type:* *string

The IP address assigned to the Cloudflare side of the IPsec tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#cloudflare_endpoint MagicWanIpsecTunnel#cloudflare_endpoint}

---

##### `InterfaceAddress`<sup>Required</sup> <a name="InterfaceAddress" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.interfaceAddress"></a>

```go
InterfaceAddress *string
```

- *Type:* *string

A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for each side of the tunnel.

Select the subnet from the following private IP space: 10.0.0.0–10.255.255.255, 172.16.0.0–172.31.255.255, 192.168.0.0–192.168.255.255.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#interface_address MagicWanIpsecTunnel#interface_address}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the IPsec tunnel. The name cannot share a name with other tunnels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#name MagicWanIpsecTunnel#name}

---

##### `CustomerEndpoint`<sup>Optional</sup> <a name="CustomerEndpoint" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.customerEndpoint"></a>

```go
CustomerEndpoint *string
```

- *Type:* *string

The IP address assigned to the customer side of the IPsec tunnel.

Not required, but must be set for proactive traceroutes to work.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#customer_endpoint MagicWanIpsecTunnel#customer_endpoint}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description forthe IPsec tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#description MagicWanIpsecTunnel#description}

---

##### `HealthCheck`<sup>Optional</sup> <a name="HealthCheck" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.healthCheck"></a>

```go
HealthCheck MagicWanIpsecTunnelHealthCheck
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck">MagicWanIpsecTunnelHealthCheck</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#health_check MagicWanIpsecTunnel#health_check}.

---

##### `IpsecTunnelId`<sup>Optional</sup> <a name="IpsecTunnelId" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.ipsecTunnelId"></a>

```go
IpsecTunnelId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#ipsec_tunnel_id MagicWanIpsecTunnel#ipsec_tunnel_id}

---

##### `Psk`<sup>Optional</sup> <a name="Psk" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.psk"></a>

```go
Psk *string
```

- *Type:* *string

A randomly generated or provided string for use in the IPsec tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#psk MagicWanIpsecTunnel#psk}

---

##### `ReplayProtection`<sup>Optional</sup> <a name="ReplayProtection" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.replayProtection"></a>

```go
ReplayProtection interface{}
```

- *Type:* interface{}

If `true`, then IPsec replay protection will be supported in the Cloudflare-to-customer direction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#replay_protection MagicWanIpsecTunnel#replay_protection}

---

### MagicWanIpsecTunnelHealthCheck <a name="MagicWanIpsecTunnelHealthCheck" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/magicwanipsectunnel"

&magicwanipsectunnel.MagicWanIpsecTunnelHealthCheck {
	Direction: *string,
	Enabled: interface{},
	Rate: *string,
	Target: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.property.direction">Direction</a></code> | <code>*string</code> | The direction of the flow of the healthcheck. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.property.enabled">Enabled</a></code> | <code>interface{}</code> | Determines whether to run healthchecks for a tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.property.rate">Rate</a></code> | <code>*string</code> | How frequent the health check is run. The default value is `mid`. Available values: "low", "mid", "high". |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.property.target">Target</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget">MagicWanIpsecTunnelHealthCheckTarget</a></code> | The destination address in a request type health check. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.property.type">Type</a></code> | <code>*string</code> | The type of healthcheck to run, reply or request. The default value is `reply`. Available values: "reply", "request". |

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

The direction of the flow of the healthcheck.

Either unidirectional, where the probe comes to you via the tunnel and the result comes back to Cloudflare via the open Internet, or bidirectional where both the probe and result come and go via the tunnel.
Available values: "unidirectional", "bidirectional".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#direction MagicWanIpsecTunnel#direction}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Determines whether to run healthchecks for a tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#enabled MagicWanIpsecTunnel#enabled}

---

##### `Rate`<sup>Optional</sup> <a name="Rate" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.property.rate"></a>

```go
Rate *string
```

- *Type:* *string

How frequent the health check is run. The default value is `mid`. Available values: "low", "mid", "high".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#rate MagicWanIpsecTunnel#rate}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.property.target"></a>

```go
Target MagicWanIpsecTunnelHealthCheckTarget
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget">MagicWanIpsecTunnelHealthCheckTarget</a>

The destination address in a request type health check.

After the healthcheck is decapsulated at the customer end of the tunnel, the ICMP echo will be forwarded to this address. This field defaults to `customer_gre_endpoint address`. This field is ignored for bidirectional healthchecks as the interface_address (not assigned to the Cloudflare side of the tunnel) is used as the target. Must be in object form if the x-magic-new-hc-target header is set to true and string form if x-magic-new-hc-target is absent or set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#target MagicWanIpsecTunnel#target}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of healthcheck to run, reply or request. The default value is `reply`. Available values: "reply", "request".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#type MagicWanIpsecTunnel#type}

---

### MagicWanIpsecTunnelHealthCheckTarget <a name="MagicWanIpsecTunnelHealthCheckTarget" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/magicwanipsectunnel"

&magicwanipsectunnel.MagicWanIpsecTunnelHealthCheckTarget {
	Saved: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget.property.saved">Saved</a></code> | <code>*string</code> | The saved health check target. |

---

##### `Saved`<sup>Optional</sup> <a name="Saved" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget.property.saved"></a>

```go
Saved *string
```

- *Type:* *string

The saved health check target.

Setting the value to the empty string indicates that the calculated default value will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_ipsec_tunnel#saved MagicWanIpsecTunnel#saved}

---

### MagicWanIpsecTunnelIpsecTunnel <a name="MagicWanIpsecTunnelIpsecTunnel" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnel.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/magicwanipsectunnel"

&magicwanipsectunnel.MagicWanIpsecTunnelIpsecTunnel {

}
```


### MagicWanIpsecTunnelIpsecTunnelHealthCheck <a name="MagicWanIpsecTunnelIpsecTunnelHealthCheck" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/magicwanipsectunnel"

&magicwanipsectunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheck {

}
```


### MagicWanIpsecTunnelIpsecTunnelHealthCheckTarget <a name="MagicWanIpsecTunnelIpsecTunnelHealthCheckTarget" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTarget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/magicwanipsectunnel"

&magicwanipsectunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTarget {

}
```


### MagicWanIpsecTunnelIpsecTunnelPskMetadata <a name="MagicWanIpsecTunnelIpsecTunnelPskMetadata" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadata.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/magicwanipsectunnel"

&magicwanipsectunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadata {

}
```


### MagicWanIpsecTunnelIpsecTunnels <a name="MagicWanIpsecTunnelIpsecTunnels" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnels.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/magicwanipsectunnel"

&magicwanipsectunnel.MagicWanIpsecTunnelIpsecTunnels {

}
```


### MagicWanIpsecTunnelIpsecTunnelsHealthCheck <a name="MagicWanIpsecTunnelIpsecTunnelsHealthCheck" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/magicwanipsectunnel"

&magicwanipsectunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheck {

}
```


### MagicWanIpsecTunnelIpsecTunnelsHealthCheckTarget <a name="MagicWanIpsecTunnelIpsecTunnelsHealthCheckTarget" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTarget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/magicwanipsectunnel"

&magicwanipsectunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTarget {

}
```


### MagicWanIpsecTunnelIpsecTunnelsPskMetadata <a name="MagicWanIpsecTunnelIpsecTunnelsPskMetadata" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadata.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/magicwanipsectunnel"

&magicwanipsectunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadata {

}
```


### MagicWanIpsecTunnelModifiedIpsecTunnel <a name="MagicWanIpsecTunnelModifiedIpsecTunnel" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnel.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/magicwanipsectunnel"

&magicwanipsectunnel.MagicWanIpsecTunnelModifiedIpsecTunnel {

}
```


### MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheck <a name="MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheck" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/magicwanipsectunnel"

&magicwanipsectunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheck {

}
```


### MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTarget <a name="MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTarget" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTarget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/magicwanipsectunnel"

&magicwanipsectunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTarget {

}
```


### MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadata <a name="MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadata" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadata.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/magicwanipsectunnel"

&magicwanipsectunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadata {

}
```


## Classes <a name="Classes" id="Classes"></a>

### MagicWanIpsecTunnelHealthCheckOutputReference <a name="MagicWanIpsecTunnelHealthCheckOutputReference" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/magicwanipsectunnel"

magicwanipsectunnel.NewMagicWanIpsecTunnelHealthCheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MagicWanIpsecTunnelHealthCheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resetRate">ResetRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTarget` <a name="PutTarget" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.putTarget"></a>

```go
func PutTarget(value MagicWanIpsecTunnelHealthCheckTarget)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget">MagicWanIpsecTunnelHealthCheckTarget</a>

---

##### `ResetDirection` <a name="ResetDirection" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resetDirection"></a>

```go
func ResetDirection()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetRate` <a name="ResetRate" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resetRate"></a>

```go
func ResetRate()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resetTarget"></a>

```go
func ResetTarget()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.target">Target</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference">MagicWanIpsecTunnelHealthCheckTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.rateInput">RateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.targetInput">TargetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.rate">Rate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.target"></a>

```go
func Target() MagicWanIpsecTunnelHealthCheckTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference">MagicWanIpsecTunnelHealthCheckTargetOutputReference</a>

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RateInput`<sup>Optional</sup> <a name="RateInput" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.rateInput"></a>

```go
func RateInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.targetInput"></a>

```go
func TargetInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Rate`<sup>Required</sup> <a name="Rate" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.rate"></a>

```go
func Rate() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MagicWanIpsecTunnelHealthCheckTargetOutputReference <a name="MagicWanIpsecTunnelHealthCheckTargetOutputReference" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/magicwanipsectunnel"

magicwanipsectunnel.NewMagicWanIpsecTunnelHealthCheckTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MagicWanIpsecTunnelHealthCheckTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.resetSaved">ResetSaved</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSaved` <a name="ResetSaved" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.resetSaved"></a>

```go
func ResetSaved()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.effective">Effective</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.savedInput">SavedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.saved">Saved</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Effective`<sup>Required</sup> <a name="Effective" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.effective"></a>

```go
func Effective() *string
```

- *Type:* *string

---

##### `SavedInput`<sup>Optional</sup> <a name="SavedInput" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.savedInput"></a>

```go
func SavedInput() *string
```

- *Type:* *string

---

##### `Saved`<sup>Required</sup> <a name="Saved" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.saved"></a>

```go
func Saved() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference <a name="MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/magicwanipsectunnel"

magicwanipsectunnel.NewMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.rate">Rate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.target">Target</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference">MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheck">MagicWanIpsecTunnelIpsecTunnelHealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Rate`<sup>Required</sup> <a name="Rate" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.rate"></a>

```go
func Rate() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.target"></a>

```go
func Target() MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference">MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.internalValue"></a>

```go
func InternalValue() MagicWanIpsecTunnelIpsecTunnelHealthCheck
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheck">MagicWanIpsecTunnelIpsecTunnelHealthCheck</a>

---


### MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference <a name="MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/magicwanipsectunnel"

magicwanipsectunnel.NewMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.property.effective">Effective</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.property.saved">Saved</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTarget">MagicWanIpsecTunnelIpsecTunnelHealthCheckTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Effective`<sup>Required</sup> <a name="Effective" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.property.effective"></a>

```go
func Effective() *string
```

- *Type:* *string

---

##### `Saved`<sup>Required</sup> <a name="Saved" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.property.saved"></a>

```go
func Saved() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() MagicWanIpsecTunnelIpsecTunnelHealthCheckTarget
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckTarget">MagicWanIpsecTunnelIpsecTunnelHealthCheckTarget</a>

---


### MagicWanIpsecTunnelIpsecTunnelOutputReference <a name="MagicWanIpsecTunnelIpsecTunnelOutputReference" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/magicwanipsectunnel"

magicwanipsectunnel.NewMagicWanIpsecTunnelIpsecTunnelOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MagicWanIpsecTunnelIpsecTunnelOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.allowNullCipher">AllowNullCipher</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.cloudflareEndpoint">CloudflareEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.customerEndpoint">CustomerEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.healthCheck">HealthCheck</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference">MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.interfaceAddress">InterfaceAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.modifiedOn">ModifiedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.pskMetadata">PskMetadata</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference">MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.replayProtection">ReplayProtection</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnel">MagicWanIpsecTunnelIpsecTunnel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowNullCipher`<sup>Required</sup> <a name="AllowNullCipher" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.allowNullCipher"></a>

```go
func AllowNullCipher() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CloudflareEndpoint`<sup>Required</sup> <a name="CloudflareEndpoint" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.cloudflareEndpoint"></a>

```go
func CloudflareEndpoint() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `CustomerEndpoint`<sup>Required</sup> <a name="CustomerEndpoint" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.customerEndpoint"></a>

```go
func CustomerEndpoint() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `HealthCheck`<sup>Required</sup> <a name="HealthCheck" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.healthCheck"></a>

```go
func HealthCheck() MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference">MagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InterfaceAddress`<sup>Required</sup> <a name="InterfaceAddress" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.interfaceAddress"></a>

```go
func InterfaceAddress() *string
```

- *Type:* *string

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.modifiedOn"></a>

```go
func ModifiedOn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PskMetadata`<sup>Required</sup> <a name="PskMetadata" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.pskMetadata"></a>

```go
func PskMetadata() MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference">MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference</a>

---

##### `ReplayProtection`<sup>Required</sup> <a name="ReplayProtection" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.replayProtection"></a>

```go
func ReplayProtection() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelOutputReference.property.internalValue"></a>

```go
func InternalValue() MagicWanIpsecTunnelIpsecTunnel
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnel">MagicWanIpsecTunnelIpsecTunnel</a>

---


### MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference <a name="MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/magicwanipsectunnel"

magicwanipsectunnel.NewMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.property.lastGeneratedOn">LastGeneratedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadata">MagicWanIpsecTunnelIpsecTunnelPskMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastGeneratedOn`<sup>Required</sup> <a name="LastGeneratedOn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.property.lastGeneratedOn"></a>

```go
func LastGeneratedOn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() MagicWanIpsecTunnelIpsecTunnelPskMetadata
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelPskMetadata">MagicWanIpsecTunnelIpsecTunnelPskMetadata</a>

---


### MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference <a name="MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/magicwanipsectunnel"

magicwanipsectunnel.NewMagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.property.rate">Rate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.property.target">Target</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference">MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheck">MagicWanIpsecTunnelIpsecTunnelsHealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Rate`<sup>Required</sup> <a name="Rate" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.property.rate"></a>

```go
func Rate() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.property.target"></a>

```go
func Target() MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference">MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference.property.internalValue"></a>

```go
func InternalValue() MagicWanIpsecTunnelIpsecTunnelsHealthCheck
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheck">MagicWanIpsecTunnelIpsecTunnelsHealthCheck</a>

---


### MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference <a name="MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/magicwanipsectunnel"

magicwanipsectunnel.NewMagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.property.effective">Effective</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.property.saved">Saved</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTarget">MagicWanIpsecTunnelIpsecTunnelsHealthCheckTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Effective`<sup>Required</sup> <a name="Effective" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.property.effective"></a>

```go
func Effective() *string
```

- *Type:* *string

---

##### `Saved`<sup>Required</sup> <a name="Saved" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.property.saved"></a>

```go
func Saved() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() MagicWanIpsecTunnelIpsecTunnelsHealthCheckTarget
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckTarget">MagicWanIpsecTunnelIpsecTunnelsHealthCheckTarget</a>

---


### MagicWanIpsecTunnelIpsecTunnelsList <a name="MagicWanIpsecTunnelIpsecTunnelsList" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/magicwanipsectunnel"

magicwanipsectunnel.NewMagicWanIpsecTunnelIpsecTunnelsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MagicWanIpsecTunnelIpsecTunnelsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList.get"></a>

```go
func Get(index *f64) MagicWanIpsecTunnelIpsecTunnelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### MagicWanIpsecTunnelIpsecTunnelsOutputReference <a name="MagicWanIpsecTunnelIpsecTunnelsOutputReference" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/magicwanipsectunnel"

magicwanipsectunnel.NewMagicWanIpsecTunnelIpsecTunnelsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MagicWanIpsecTunnelIpsecTunnelsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.allowNullCipher">AllowNullCipher</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.cloudflareEndpoint">CloudflareEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.customerEndpoint">CustomerEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.healthCheck">HealthCheck</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference">MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.interfaceAddress">InterfaceAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.modifiedOn">ModifiedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.pskMetadata">PskMetadata</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference">MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.replayProtection">ReplayProtection</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnels">MagicWanIpsecTunnelIpsecTunnels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowNullCipher`<sup>Required</sup> <a name="AllowNullCipher" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.allowNullCipher"></a>

```go
func AllowNullCipher() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CloudflareEndpoint`<sup>Required</sup> <a name="CloudflareEndpoint" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.cloudflareEndpoint"></a>

```go
func CloudflareEndpoint() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `CustomerEndpoint`<sup>Required</sup> <a name="CustomerEndpoint" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.customerEndpoint"></a>

```go
func CustomerEndpoint() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `HealthCheck`<sup>Required</sup> <a name="HealthCheck" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.healthCheck"></a>

```go
func HealthCheck() MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference">MagicWanIpsecTunnelIpsecTunnelsHealthCheckOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InterfaceAddress`<sup>Required</sup> <a name="InterfaceAddress" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.interfaceAddress"></a>

```go
func InterfaceAddress() *string
```

- *Type:* *string

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.modifiedOn"></a>

```go
func ModifiedOn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PskMetadata`<sup>Required</sup> <a name="PskMetadata" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.pskMetadata"></a>

```go
func PskMetadata() MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference">MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference</a>

---

##### `ReplayProtection`<sup>Required</sup> <a name="ReplayProtection" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.replayProtection"></a>

```go
func ReplayProtection() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsOutputReference.property.internalValue"></a>

```go
func InternalValue() MagicWanIpsecTunnelIpsecTunnels
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnels">MagicWanIpsecTunnelIpsecTunnels</a>

---


### MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference <a name="MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/magicwanipsectunnel"

magicwanipsectunnel.NewMagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.property.lastGeneratedOn">LastGeneratedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadata">MagicWanIpsecTunnelIpsecTunnelsPskMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastGeneratedOn`<sup>Required</sup> <a name="LastGeneratedOn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.property.lastGeneratedOn"></a>

```go
func LastGeneratedOn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() MagicWanIpsecTunnelIpsecTunnelsPskMetadata
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelIpsecTunnelsPskMetadata">MagicWanIpsecTunnelIpsecTunnelsPskMetadata</a>

---


### MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference <a name="MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/magicwanipsectunnel"

magicwanipsectunnel.NewMagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.property.rate">Rate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.property.target">Target</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference">MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheck">MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Rate`<sup>Required</sup> <a name="Rate" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.property.rate"></a>

```go
func Rate() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.property.target"></a>

```go
func Target() MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference">MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference.property.internalValue"></a>

```go
func InternalValue() MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheck
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheck">MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheck</a>

---


### MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference <a name="MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/magicwanipsectunnel"

magicwanipsectunnel.NewMagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.property.effective">Effective</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.property.saved">Saved</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTarget">MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Effective`<sup>Required</sup> <a name="Effective" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.property.effective"></a>

```go
func Effective() *string
```

- *Type:* *string

---

##### `Saved`<sup>Required</sup> <a name="Saved" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.property.saved"></a>

```go
func Saved() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTarget
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTarget">MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckTarget</a>

---


### MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference <a name="MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/magicwanipsectunnel"

magicwanipsectunnel.NewMagicWanIpsecTunnelModifiedIpsecTunnelOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.allowNullCipher">AllowNullCipher</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.cloudflareEndpoint">CloudflareEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.customerEndpoint">CustomerEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.healthCheck">HealthCheck</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference">MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.interfaceAddress">InterfaceAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.modifiedOn">ModifiedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.pskMetadata">PskMetadata</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference">MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.replayProtection">ReplayProtection</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnel">MagicWanIpsecTunnelModifiedIpsecTunnel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowNullCipher`<sup>Required</sup> <a name="AllowNullCipher" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.allowNullCipher"></a>

```go
func AllowNullCipher() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CloudflareEndpoint`<sup>Required</sup> <a name="CloudflareEndpoint" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.cloudflareEndpoint"></a>

```go
func CloudflareEndpoint() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `CustomerEndpoint`<sup>Required</sup> <a name="CustomerEndpoint" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.customerEndpoint"></a>

```go
func CustomerEndpoint() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `HealthCheck`<sup>Required</sup> <a name="HealthCheck" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.healthCheck"></a>

```go
func HealthCheck() MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference">MagicWanIpsecTunnelModifiedIpsecTunnelHealthCheckOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InterfaceAddress`<sup>Required</sup> <a name="InterfaceAddress" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.interfaceAddress"></a>

```go
func InterfaceAddress() *string
```

- *Type:* *string

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.modifiedOn"></a>

```go
func ModifiedOn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PskMetadata`<sup>Required</sup> <a name="PskMetadata" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.pskMetadata"></a>

```go
func PskMetadata() MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference">MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference</a>

---

##### `ReplayProtection`<sup>Required</sup> <a name="ReplayProtection" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.replayProtection"></a>

```go
func ReplayProtection() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelOutputReference.property.internalValue"></a>

```go
func InternalValue() MagicWanIpsecTunnelModifiedIpsecTunnel
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnel">MagicWanIpsecTunnelModifiedIpsecTunnel</a>

---


### MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference <a name="MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/magicwanipsectunnel"

magicwanipsectunnel.NewMagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.property.lastGeneratedOn">LastGeneratedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadata">MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastGeneratedOn`<sup>Required</sup> <a name="LastGeneratedOn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.property.lastGeneratedOn"></a>

```go
func LastGeneratedOn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadata
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadata">MagicWanIpsecTunnelModifiedIpsecTunnelPskMetadata</a>

---



