# `zeroTrustDlpPredefinedEntry` Submodule <a name="`zeroTrustDlpPredefinedEntry` Submodule" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDlpPredefinedEntry <a name="ZeroTrustDlpPredefinedEntry" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_dlp_predefined_entry cloudflare_zero_trust_dlp_predefined_entry}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdlppredefinedentry"

zerotrustdlppredefinedentry.NewZeroTrustDlpPredefinedEntry(scope Construct, id *string, config ZeroTrustDlpPredefinedEntryConfig) ZeroTrustDlpPredefinedEntry
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig">ZeroTrustDlpPredefinedEntryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig">ZeroTrustDlpPredefinedEntryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.resetProfileId">ResetProfileId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetProfileId` <a name="ResetProfileId" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.resetProfileId"></a>

```go
func ResetProfileId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustDlpPredefinedEntry resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdlppredefinedentry"

zerotrustdlppredefinedentry.ZeroTrustDlpPredefinedEntry_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdlppredefinedentry"

zerotrustdlppredefinedentry.ZeroTrustDlpPredefinedEntry_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdlppredefinedentry"

zerotrustdlppredefinedentry.ZeroTrustDlpPredefinedEntry_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdlppredefinedentry"

zerotrustdlppredefinedentry.ZeroTrustDlpPredefinedEntry_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ZeroTrustDlpPredefinedEntry resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ZeroTrustDlpPredefinedEntry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ZeroTrustDlpPredefinedEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_dlp_predefined_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustDlpPredefinedEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.confidence">Confidence</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference">ZeroTrustDlpPredefinedEntryConfidenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.entryIdInput">EntryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.profileIdInput">ProfileIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.entryId">EntryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.profileId">ProfileId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Confidence`<sup>Required</sup> <a name="Confidence" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.confidence"></a>

```go
func Confidence() ZeroTrustDlpPredefinedEntryConfidenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference">ZeroTrustDlpPredefinedEntryConfidenceOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EntryIdInput`<sup>Optional</sup> <a name="EntryIdInput" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.entryIdInput"></a>

```go
func EntryIdInput() *string
```

- *Type:* *string

---

##### `ProfileIdInput`<sup>Optional</sup> <a name="ProfileIdInput" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.profileIdInput"></a>

```go
func ProfileIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `EntryId`<sup>Required</sup> <a name="EntryId" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.entryId"></a>

```go
func EntryId() *string
```

- *Type:* *string

---

##### `ProfileId`<sup>Required</sup> <a name="ProfileId" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.profileId"></a>

```go
func ProfileId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDlpPredefinedEntryConfidence <a name="ZeroTrustDlpPredefinedEntryConfidence" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidence.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdlppredefinedentry"

&zerotrustdlppredefinedentry.ZeroTrustDlpPredefinedEntryConfidence {

}
```


### ZeroTrustDlpPredefinedEntryConfig <a name="ZeroTrustDlpPredefinedEntryConfig" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdlppredefinedentry"

&zerotrustdlppredefinedentry.ZeroTrustDlpPredefinedEntryConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Enabled: interface{},
	EntryId: *string,
	ProfileId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_dlp_predefined_entry#account_id ZeroTrustDlpPredefinedEntry#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_dlp_predefined_entry#enabled ZeroTrustDlpPredefinedEntry#enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.entryId">EntryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_dlp_predefined_entry#entry_id ZeroTrustDlpPredefinedEntry#entry_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.profileId">ProfileId</a></code> | <code>*string</code> | This field is not actually used as the owning profile for a predefined entry is already set to a predefined profile. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_dlp_predefined_entry#account_id ZeroTrustDlpPredefinedEntry#account_id}.

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_dlp_predefined_entry#enabled ZeroTrustDlpPredefinedEntry#enabled}.

---

##### `EntryId`<sup>Required</sup> <a name="EntryId" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.entryId"></a>

```go
EntryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_dlp_predefined_entry#entry_id ZeroTrustDlpPredefinedEntry#entry_id}.

---

##### `ProfileId`<sup>Optional</sup> <a name="ProfileId" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.profileId"></a>

```go
ProfileId *string
```

- *Type:* *string

This field is not actually used as the owning profile for a predefined entry is already set to a predefined profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_dlp_predefined_entry#profile_id ZeroTrustDlpPredefinedEntry#profile_id}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustDlpPredefinedEntryConfidenceOutputReference <a name="ZeroTrustDlpPredefinedEntryConfidenceOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdlppredefinedentry"

zerotrustdlppredefinedentry.NewZeroTrustDlpPredefinedEntryConfidenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZeroTrustDlpPredefinedEntryConfidenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.property.aiContextAvailable">AiContextAvailable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.property.available">Available</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidence">ZeroTrustDlpPredefinedEntryConfidence</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AiContextAvailable`<sup>Required</sup> <a name="AiContextAvailable" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.property.aiContextAvailable"></a>

```go
func AiContextAvailable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Available`<sup>Required</sup> <a name="Available" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.property.available"></a>

```go
func Available() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.property.internalValue"></a>

```go
func InternalValue() ZeroTrustDlpPredefinedEntryConfidence
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidence">ZeroTrustDlpPredefinedEntryConfidence</a>

---



