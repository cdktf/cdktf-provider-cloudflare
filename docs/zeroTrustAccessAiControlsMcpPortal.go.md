# `zeroTrustAccessAiControlsMcpPortal` Submodule <a name="`zeroTrustAccessAiControlsMcpPortal` Submodule" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustAccessAiControlsMcpPortal <a name="ZeroTrustAccessAiControlsMcpPortal" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal cloudflare_zero_trust_access_ai_controls_mcp_portal}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustaccessaicontrolsmcpportal"

zerotrustaccessaicontrolsmcpportal.NewZeroTrustAccessAiControlsMcpPortal(scope Construct, id *string, config ZeroTrustAccessAiControlsMcpPortalConfig) ZeroTrustAccessAiControlsMcpPortal
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig">ZeroTrustAccessAiControlsMcpPortalConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig">ZeroTrustAccessAiControlsMcpPortalConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.putServers">PutServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.resetServers">ResetServers</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutServers` <a name="PutServers" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.putServers"></a>

```go
func PutServers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.putServers.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetServers` <a name="ResetServers" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.resetServers"></a>

```go
func ResetServers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustAccessAiControlsMcpPortal resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustaccessaicontrolsmcpportal"

zerotrustaccessaicontrolsmcpportal.ZeroTrustAccessAiControlsMcpPortal_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustaccessaicontrolsmcpportal"

zerotrustaccessaicontrolsmcpportal.ZeroTrustAccessAiControlsMcpPortal_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustaccessaicontrolsmcpportal"

zerotrustaccessaicontrolsmcpportal.ZeroTrustAccessAiControlsMcpPortal_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustaccessaicontrolsmcpportal"

zerotrustaccessaicontrolsmcpportal.ZeroTrustAccessAiControlsMcpPortal_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ZeroTrustAccessAiControlsMcpPortal resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ZeroTrustAccessAiControlsMcpPortal to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ZeroTrustAccessAiControlsMcpPortal that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustAccessAiControlsMcpPortal to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.modifiedAt">ModifiedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.modifiedBy">ModifiedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.servers">Servers</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList">ZeroTrustAccessAiControlsMcpPortalServersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.serversInput">ServersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.modifiedAt"></a>

```go
func ModifiedAt() *string
```

- *Type:* *string

---

##### `ModifiedBy`<sup>Required</sup> <a name="ModifiedBy" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.modifiedBy"></a>

```go
func ModifiedBy() *string
```

- *Type:* *string

---

##### `Servers`<sup>Required</sup> <a name="Servers" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.servers"></a>

```go
func Servers() ZeroTrustAccessAiControlsMcpPortalServersList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList">ZeroTrustAccessAiControlsMcpPortalServersList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ServersInput`<sup>Optional</sup> <a name="ServersInput" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.serversInput"></a>

```go
func ServersInput() interface{}
```

- *Type:* interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustAccessAiControlsMcpPortalConfig <a name="ZeroTrustAccessAiControlsMcpPortalConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustaccessaicontrolsmcpportal"

&zerotrustaccessaicontrolsmcpportal.ZeroTrustAccessAiControlsMcpPortalConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Hostname: *string,
	Id: *string,
	Name: *string,
	Description: *string,
	Servers: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#account_id ZeroTrustAccessAiControlsMcpPortal#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.hostname">Hostname</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#hostname ZeroTrustAccessAiControlsMcpPortal#hostname}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.id">Id</a></code> | <code>*string</code> | portal id. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#name ZeroTrustAccessAiControlsMcpPortal#name}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#description ZeroTrustAccessAiControlsMcpPortal#description}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.servers">Servers</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#servers ZeroTrustAccessAiControlsMcpPortal#servers}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#account_id ZeroTrustAccessAiControlsMcpPortal#account_id}.

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#hostname ZeroTrustAccessAiControlsMcpPortal#hostname}.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

portal id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#id ZeroTrustAccessAiControlsMcpPortal#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#name ZeroTrustAccessAiControlsMcpPortal#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#description ZeroTrustAccessAiControlsMcpPortal#description}.

---

##### `Servers`<sup>Optional</sup> <a name="Servers" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.servers"></a>

```go
Servers interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#servers ZeroTrustAccessAiControlsMcpPortal#servers}.

---

### ZeroTrustAccessAiControlsMcpPortalServers <a name="ZeroTrustAccessAiControlsMcpPortalServers" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustaccessaicontrolsmcpportal"

&zerotrustaccessaicontrolsmcpportal.ZeroTrustAccessAiControlsMcpPortalServers {
	ServerId: *string,
	DefaultDisabled: interface{},
	OnBehalf: interface{},
	UpdatedPrompts: interface{},
	UpdatedTools: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers.property.serverId">ServerId</a></code> | <code>*string</code> | server id. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers.property.defaultDisabled">DefaultDisabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#default_disabled ZeroTrustAccessAiControlsMcpPortal#default_disabled}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers.property.onBehalf">OnBehalf</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#on_behalf ZeroTrustAccessAiControlsMcpPortal#on_behalf}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers.property.updatedPrompts">UpdatedPrompts</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#updated_prompts ZeroTrustAccessAiControlsMcpPortal#updated_prompts}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers.property.updatedTools">UpdatedTools</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#updated_tools ZeroTrustAccessAiControlsMcpPortal#updated_tools}. |

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers.property.serverId"></a>

```go
ServerId *string
```

- *Type:* *string

server id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#server_id ZeroTrustAccessAiControlsMcpPortal#server_id}

---

##### `DefaultDisabled`<sup>Optional</sup> <a name="DefaultDisabled" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers.property.defaultDisabled"></a>

```go
DefaultDisabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#default_disabled ZeroTrustAccessAiControlsMcpPortal#default_disabled}.

---

##### `OnBehalf`<sup>Optional</sup> <a name="OnBehalf" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers.property.onBehalf"></a>

```go
OnBehalf interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#on_behalf ZeroTrustAccessAiControlsMcpPortal#on_behalf}.

---

##### `UpdatedPrompts`<sup>Optional</sup> <a name="UpdatedPrompts" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers.property.updatedPrompts"></a>

```go
UpdatedPrompts interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#updated_prompts ZeroTrustAccessAiControlsMcpPortal#updated_prompts}.

---

##### `UpdatedTools`<sup>Optional</sup> <a name="UpdatedTools" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers.property.updatedTools"></a>

```go
UpdatedTools interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#updated_tools ZeroTrustAccessAiControlsMcpPortal#updated_tools}.

---

### ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts <a name="ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustaccessaicontrolsmcpportal"

&zerotrustaccessaicontrolsmcpportal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts {
	Name: *string,
	Description: *string,
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#name ZeroTrustAccessAiControlsMcpPortal#name}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#description ZeroTrustAccessAiControlsMcpPortal#description}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#enabled ZeroTrustAccessAiControlsMcpPortal#enabled}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#name ZeroTrustAccessAiControlsMcpPortal#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#description ZeroTrustAccessAiControlsMcpPortal#description}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#enabled ZeroTrustAccessAiControlsMcpPortal#enabled}.

---

### ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools <a name="ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustaccessaicontrolsmcpportal"

&zerotrustaccessaicontrolsmcpportal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools {
	Name: *string,
	Description: *string,
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#name ZeroTrustAccessAiControlsMcpPortal#name}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#description ZeroTrustAccessAiControlsMcpPortal#description}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#enabled ZeroTrustAccessAiControlsMcpPortal#enabled}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#name ZeroTrustAccessAiControlsMcpPortal#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#description ZeroTrustAccessAiControlsMcpPortal#description}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#enabled ZeroTrustAccessAiControlsMcpPortal#enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustAccessAiControlsMcpPortalServersList <a name="ZeroTrustAccessAiControlsMcpPortalServersList" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustaccessaicontrolsmcpportal"

zerotrustaccessaicontrolsmcpportal.NewZeroTrustAccessAiControlsMcpPortalServersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustAccessAiControlsMcpPortalServersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.get"></a>

```go
func Get(index *f64) ZeroTrustAccessAiControlsMcpPortalServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessAiControlsMcpPortalServersOutputReference <a name="ZeroTrustAccessAiControlsMcpPortalServersOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustaccessaicontrolsmcpportal"

zerotrustaccessaicontrolsmcpportal.NewZeroTrustAccessAiControlsMcpPortalServersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustAccessAiControlsMcpPortalServersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.putUpdatedPrompts">PutUpdatedPrompts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.putUpdatedTools">PutUpdatedTools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.resetDefaultDisabled">ResetDefaultDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.resetOnBehalf">ResetOnBehalf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.resetUpdatedPrompts">ResetUpdatedPrompts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.resetUpdatedTools">ResetUpdatedTools</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutUpdatedPrompts` <a name="PutUpdatedPrompts" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.putUpdatedPrompts"></a>

```go
func PutUpdatedPrompts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.putUpdatedPrompts.parameter.value"></a>

- *Type:* interface{}

---

##### `PutUpdatedTools` <a name="PutUpdatedTools" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.putUpdatedTools"></a>

```go
func PutUpdatedTools(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.putUpdatedTools.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDefaultDisabled` <a name="ResetDefaultDisabled" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.resetDefaultDisabled"></a>

```go
func ResetDefaultDisabled()
```

##### `ResetOnBehalf` <a name="ResetOnBehalf" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.resetOnBehalf"></a>

```go
func ResetOnBehalf()
```

##### `ResetUpdatedPrompts` <a name="ResetUpdatedPrompts" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.resetUpdatedPrompts"></a>

```go
func ResetUpdatedPrompts()
```

##### `ResetUpdatedTools` <a name="ResetUpdatedTools" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.resetUpdatedTools"></a>

```go
func ResetUpdatedTools()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.updatedPrompts">UpdatedPrompts</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList">ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.updatedTools">UpdatedTools</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList">ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.defaultDisabledInput">DefaultDisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.onBehalfInput">OnBehalfInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.serverIdInput">ServerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.updatedPromptsInput">UpdatedPromptsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.updatedToolsInput">UpdatedToolsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.defaultDisabled">DefaultDisabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.onBehalf">OnBehalf</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.serverId">ServerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UpdatedPrompts`<sup>Required</sup> <a name="UpdatedPrompts" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.updatedPrompts"></a>

```go
func UpdatedPrompts() ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList">ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList</a>

---

##### `UpdatedTools`<sup>Required</sup> <a name="UpdatedTools" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.updatedTools"></a>

```go
func UpdatedTools() ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList">ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList</a>

---

##### `DefaultDisabledInput`<sup>Optional</sup> <a name="DefaultDisabledInput" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.defaultDisabledInput"></a>

```go
func DefaultDisabledInput() interface{}
```

- *Type:* interface{}

---

##### `OnBehalfInput`<sup>Optional</sup> <a name="OnBehalfInput" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.onBehalfInput"></a>

```go
func OnBehalfInput() interface{}
```

- *Type:* interface{}

---

##### `ServerIdInput`<sup>Optional</sup> <a name="ServerIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.serverIdInput"></a>

```go
func ServerIdInput() *string
```

- *Type:* *string

---

##### `UpdatedPromptsInput`<sup>Optional</sup> <a name="UpdatedPromptsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.updatedPromptsInput"></a>

```go
func UpdatedPromptsInput() interface{}
```

- *Type:* interface{}

---

##### `UpdatedToolsInput`<sup>Optional</sup> <a name="UpdatedToolsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.updatedToolsInput"></a>

```go
func UpdatedToolsInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultDisabled`<sup>Required</sup> <a name="DefaultDisabled" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.defaultDisabled"></a>

```go
func DefaultDisabled() interface{}
```

- *Type:* interface{}

---

##### `OnBehalf`<sup>Required</sup> <a name="OnBehalf" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.onBehalf"></a>

```go
func OnBehalf() interface{}
```

- *Type:* interface{}

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.serverId"></a>

```go
func ServerId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList <a name="ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustaccessaicontrolsmcpportal"

zerotrustaccessaicontrolsmcpportal.NewZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.get"></a>

```go
func Get(index *f64) ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference <a name="ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustaccessaicontrolsmcpportal"

zerotrustaccessaicontrolsmcpportal.NewZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList <a name="ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustaccessaicontrolsmcpportal"

zerotrustaccessaicontrolsmcpportal.NewZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.get"></a>

```go
func Get(index *f64) ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference <a name="ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustaccessaicontrolsmcpportal"

zerotrustaccessaicontrolsmcpportal.NewZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



