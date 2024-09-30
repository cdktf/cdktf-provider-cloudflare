# `zeroTrustRiskScoreIntegration` Submodule <a name="`zeroTrustRiskScoreIntegration` Submodule" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustRiskScoreIntegration <a name="ZeroTrustRiskScoreIntegration" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_risk_score_integration cloudflare_zero_trust_risk_score_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.Initializer"></a>

```typescript
import { zeroTrustRiskScoreIntegration } from '@cdktf/provider-cloudflare'

new zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration(scope: Construct, id: string, config: ZeroTrustRiskScoreIntegrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig">ZeroTrustRiskScoreIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig">ZeroTrustRiskScoreIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.resetActive">resetActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.resetReferenceId">resetReferenceId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetActive` <a name="resetActive" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.resetActive"></a>

```typescript
public resetActive(): void
```

##### `resetReferenceId` <a name="resetReferenceId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.resetReferenceId"></a>

```typescript
public resetReferenceId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustRiskScoreIntegration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.isConstruct"></a>

```typescript
import { zeroTrustRiskScoreIntegration } from '@cdktf/provider-cloudflare'

zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.isTerraformElement"></a>

```typescript
import { zeroTrustRiskScoreIntegration } from '@cdktf/provider-cloudflare'

zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.isTerraformResource"></a>

```typescript
import { zeroTrustRiskScoreIntegration } from '@cdktf/provider-cloudflare'

zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.generateConfigForImport"></a>

```typescript
import { zeroTrustRiskScoreIntegration } from '@cdktf/provider-cloudflare'

zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ZeroTrustRiskScoreIntegration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustRiskScoreIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustRiskScoreIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_risk_score_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustRiskScoreIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.wellKnownUrl">wellKnownUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.activeInput">activeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.integrationTypeInput">integrationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.referenceIdInput">referenceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.tenantUrlInput">tenantUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.active">active</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.integrationType">integrationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.referenceId">referenceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.tenantUrl">tenantUrl</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `wellKnownUrl`<sup>Required</sup> <a name="wellKnownUrl" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.wellKnownUrl"></a>

```typescript
public readonly wellKnownUrl: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.activeInput"></a>

```typescript
public readonly activeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `integrationTypeInput`<sup>Optional</sup> <a name="integrationTypeInput" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.integrationTypeInput"></a>

```typescript
public readonly integrationTypeInput: string;
```

- *Type:* string

---

##### `referenceIdInput`<sup>Optional</sup> <a name="referenceIdInput" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.referenceIdInput"></a>

```typescript
public readonly referenceIdInput: string;
```

- *Type:* string

---

##### `tenantUrlInput`<sup>Optional</sup> <a name="tenantUrlInput" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.tenantUrlInput"></a>

```typescript
public readonly tenantUrlInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `integrationType`<sup>Required</sup> <a name="integrationType" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.integrationType"></a>

```typescript
public readonly integrationType: string;
```

- *Type:* string

---

##### `referenceId`<sup>Required</sup> <a name="referenceId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.referenceId"></a>

```typescript
public readonly referenceId: string;
```

- *Type:* string

---

##### `tenantUrl`<sup>Required</sup> <a name="tenantUrl" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.tenantUrl"></a>

```typescript
public readonly tenantUrl: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustRiskScoreIntegrationConfig <a name="ZeroTrustRiskScoreIntegrationConfig" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.Initializer"></a>

```typescript
import { zeroTrustRiskScoreIntegration } from '@cdktf/provider-cloudflare'

const zeroTrustRiskScoreIntegrationConfig: zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.accountId">accountId</a></code> | <code>string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.integrationType">integrationType</a></code> | <code>string</code> | The type of integration, e.g. 'Okta'. Full list of allowed values can be found here: https://developers.cloudflare.com/api/operations/dlp-zt-risk-score-integration-create#request-body. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.tenantUrl">tenantUrl</a></code> | <code>string</code> | The base url of the tenant, e.g. 'https://tenant.okta.com'. Must be your Okta Tenant URL and not your custom domain. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.active">active</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether this integration is enabled. If disabled, no risk changes will be exported to the third-party. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.referenceId">referenceId</a></code> | <code>string</code> | A reference id that can be supplied by the client. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_risk_score_integration#account_id ZeroTrustRiskScoreIntegration#account_id}

---

##### `integrationType`<sup>Required</sup> <a name="integrationType" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.integrationType"></a>

```typescript
public readonly integrationType: string;
```

- *Type:* string

The type of integration, e.g. 'Okta'. Full list of allowed values can be found here: https://developers.cloudflare.com/api/operations/dlp-zt-risk-score-integration-create#request-body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_risk_score_integration#integration_type ZeroTrustRiskScoreIntegration#integration_type}

---

##### `tenantUrl`<sup>Required</sup> <a name="tenantUrl" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.tenantUrl"></a>

```typescript
public readonly tenantUrl: string;
```

- *Type:* string

The base url of the tenant, e.g. 'https://tenant.okta.com'. Must be your Okta Tenant URL and not your custom domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_risk_score_integration#tenant_url ZeroTrustRiskScoreIntegration#tenant_url}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether this integration is enabled. If disabled, no risk changes will be exported to the third-party.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_risk_score_integration#active ZeroTrustRiskScoreIntegration#active}

---

##### `referenceId`<sup>Optional</sup> <a name="referenceId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.referenceId"></a>

```typescript
public readonly referenceId: string;
```

- *Type:* string

A reference id that can be supplied by the client.

Currently this should be set to the Access-Okta IDP ID (a UUIDv4). If omitted, a random UUIDv4 is used. https://developers.cloudflare.com/api/operations/access-identity-providers-get-an-access-identity-provider

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_risk_score_integration#reference_id ZeroTrustRiskScoreIntegration#reference_id}

---



