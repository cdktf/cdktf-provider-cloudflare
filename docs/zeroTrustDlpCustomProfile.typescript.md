# `zeroTrustDlpCustomProfile` Submodule <a name="`zeroTrustDlpCustomProfile` Submodule" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDlpCustomProfile <a name="ZeroTrustDlpCustomProfile" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile cloudflare_zero_trust_dlp_custom_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.Initializer"></a>

```typescript
import { zeroTrustDlpCustomProfile } from '@cdktf/provider-cloudflare'

new zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile(scope: Construct, id: string, config: ZeroTrustDlpCustomProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig">ZeroTrustDlpCustomProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig">ZeroTrustDlpCustomProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.putContextAwareness">putContextAwareness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.putEntries">putEntries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.putProfiles">putProfiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.putSharedEntries">putSharedEntries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.resetAiContextEnabled">resetAiContextEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.resetAllowedMatchCount">resetAllowedMatchCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.resetConfidenceThreshold">resetConfidenceThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.resetContextAwareness">resetContextAwareness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.resetEntries">resetEntries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.resetOcrEnabled">resetOcrEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.resetProfiles">resetProfiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.resetSharedEntries">resetSharedEntries</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContextAwareness` <a name="putContextAwareness" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.putContextAwareness"></a>

```typescript
public putContextAwareness(value: ZeroTrustDlpCustomProfileContextAwareness): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.putContextAwareness.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwareness">ZeroTrustDlpCustomProfileContextAwareness</a>

---

##### `putEntries` <a name="putEntries" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.putEntries"></a>

```typescript
public putEntries(value: IResolvable | ZeroTrustDlpCustomProfileEntries[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.putEntries.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntries">ZeroTrustDlpCustomProfileEntries</a>[]

---

##### `putProfiles` <a name="putProfiles" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.putProfiles"></a>

```typescript
public putProfiles(value: IResolvable | ZeroTrustDlpCustomProfileProfiles[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.putProfiles.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfiles">ZeroTrustDlpCustomProfileProfiles</a>[]

---

##### `putSharedEntries` <a name="putSharedEntries" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.putSharedEntries"></a>

```typescript
public putSharedEntries(value: IResolvable | ZeroTrustDlpCustomProfileSharedEntries[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.putSharedEntries.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntries">ZeroTrustDlpCustomProfileSharedEntries</a>[]

---

##### `resetAiContextEnabled` <a name="resetAiContextEnabled" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.resetAiContextEnabled"></a>

```typescript
public resetAiContextEnabled(): void
```

##### `resetAllowedMatchCount` <a name="resetAllowedMatchCount" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.resetAllowedMatchCount"></a>

```typescript
public resetAllowedMatchCount(): void
```

##### `resetConfidenceThreshold` <a name="resetConfidenceThreshold" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.resetConfidenceThreshold"></a>

```typescript
public resetConfidenceThreshold(): void
```

##### `resetContextAwareness` <a name="resetContextAwareness" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.resetContextAwareness"></a>

```typescript
public resetContextAwareness(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEntries` <a name="resetEntries" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.resetEntries"></a>

```typescript
public resetEntries(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOcrEnabled` <a name="resetOcrEnabled" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.resetOcrEnabled"></a>

```typescript
public resetOcrEnabled(): void
```

##### `resetProfiles` <a name="resetProfiles" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.resetProfiles"></a>

```typescript
public resetProfiles(): void
```

##### `resetSharedEntries` <a name="resetSharedEntries" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.resetSharedEntries"></a>

```typescript
public resetSharedEntries(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustDlpCustomProfile resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.isConstruct"></a>

```typescript
import { zeroTrustDlpCustomProfile } from '@cdktf/provider-cloudflare'

zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.isTerraformElement"></a>

```typescript
import { zeroTrustDlpCustomProfile } from '@cdktf/provider-cloudflare'

zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.isTerraformResource"></a>

```typescript
import { zeroTrustDlpCustomProfile } from '@cdktf/provider-cloudflare'

zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.generateConfigForImport"></a>

```typescript
import { zeroTrustDlpCustomProfile } from '@cdktf/provider-cloudflare'

zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ZeroTrustDlpCustomProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustDlpCustomProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustDlpCustomProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustDlpCustomProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.contextAwareness">contextAwareness</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference">ZeroTrustDlpCustomProfileContextAwarenessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.entries">entries</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList">ZeroTrustDlpCustomProfileEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.openAccess">openAccess</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.profiles">profiles</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesList">ZeroTrustDlpCustomProfileProfilesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.sharedEntries">sharedEntries</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList">ZeroTrustDlpCustomProfileSharedEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.aiContextEnabledInput">aiContextEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.allowedMatchCountInput">allowedMatchCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.confidenceThresholdInput">confidenceThresholdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.contextAwarenessInput">contextAwarenessInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwareness">ZeroTrustDlpCustomProfileContextAwareness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.entriesInput">entriesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntries">ZeroTrustDlpCustomProfileEntries</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.ocrEnabledInput">ocrEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.profilesInput">profilesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfiles">ZeroTrustDlpCustomProfileProfiles</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.sharedEntriesInput">sharedEntriesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntries">ZeroTrustDlpCustomProfileSharedEntries</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.aiContextEnabled">aiContextEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.allowedMatchCount">allowedMatchCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.confidenceThreshold">confidenceThreshold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.ocrEnabled">ocrEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `contextAwareness`<sup>Required</sup> <a name="contextAwareness" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.contextAwareness"></a>

```typescript
public readonly contextAwareness: ZeroTrustDlpCustomProfileContextAwarenessOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference">ZeroTrustDlpCustomProfileContextAwarenessOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.entries"></a>

```typescript
public readonly entries: ZeroTrustDlpCustomProfileEntriesList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList">ZeroTrustDlpCustomProfileEntriesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `openAccess`<sup>Required</sup> <a name="openAccess" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.openAccess"></a>

```typescript
public readonly openAccess: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `profiles`<sup>Required</sup> <a name="profiles" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.profiles"></a>

```typescript
public readonly profiles: ZeroTrustDlpCustomProfileProfilesList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesList">ZeroTrustDlpCustomProfileProfilesList</a>

---

##### `sharedEntries`<sup>Required</sup> <a name="sharedEntries" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.sharedEntries"></a>

```typescript
public readonly sharedEntries: ZeroTrustDlpCustomProfileSharedEntriesList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList">ZeroTrustDlpCustomProfileSharedEntriesList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `aiContextEnabledInput`<sup>Optional</sup> <a name="aiContextEnabledInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.aiContextEnabledInput"></a>

```typescript
public readonly aiContextEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedMatchCountInput`<sup>Optional</sup> <a name="allowedMatchCountInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.allowedMatchCountInput"></a>

```typescript
public readonly allowedMatchCountInput: number;
```

- *Type:* number

---

##### `confidenceThresholdInput`<sup>Optional</sup> <a name="confidenceThresholdInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.confidenceThresholdInput"></a>

```typescript
public readonly confidenceThresholdInput: string;
```

- *Type:* string

---

##### `contextAwarenessInput`<sup>Optional</sup> <a name="contextAwarenessInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.contextAwarenessInput"></a>

```typescript
public readonly contextAwarenessInput: IResolvable | ZeroTrustDlpCustomProfileContextAwareness;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwareness">ZeroTrustDlpCustomProfileContextAwareness</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `entriesInput`<sup>Optional</sup> <a name="entriesInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.entriesInput"></a>

```typescript
public readonly entriesInput: IResolvable | ZeroTrustDlpCustomProfileEntries[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntries">ZeroTrustDlpCustomProfileEntries</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ocrEnabledInput`<sup>Optional</sup> <a name="ocrEnabledInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.ocrEnabledInput"></a>

```typescript
public readonly ocrEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `profilesInput`<sup>Optional</sup> <a name="profilesInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.profilesInput"></a>

```typescript
public readonly profilesInput: IResolvable | ZeroTrustDlpCustomProfileProfiles[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfiles">ZeroTrustDlpCustomProfileProfiles</a>[]

---

##### `sharedEntriesInput`<sup>Optional</sup> <a name="sharedEntriesInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.sharedEntriesInput"></a>

```typescript
public readonly sharedEntriesInput: IResolvable | ZeroTrustDlpCustomProfileSharedEntries[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntries">ZeroTrustDlpCustomProfileSharedEntries</a>[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `aiContextEnabled`<sup>Required</sup> <a name="aiContextEnabled" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.aiContextEnabled"></a>

```typescript
public readonly aiContextEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedMatchCount`<sup>Required</sup> <a name="allowedMatchCount" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.allowedMatchCount"></a>

```typescript
public readonly allowedMatchCount: number;
```

- *Type:* number

---

##### `confidenceThreshold`<sup>Required</sup> <a name="confidenceThreshold" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.confidenceThreshold"></a>

```typescript
public readonly confidenceThreshold: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ocrEnabled`<sup>Required</sup> <a name="ocrEnabled" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.ocrEnabled"></a>

```typescript
public readonly ocrEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDlpCustomProfileConfig <a name="ZeroTrustDlpCustomProfileConfig" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.Initializer"></a>

```typescript
import { zeroTrustDlpCustomProfile } from '@cdktf/provider-cloudflare'

const zeroTrustDlpCustomProfileConfig: zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#account_id ZeroTrustDlpCustomProfile#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.aiContextEnabled">aiContextEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#ai_context_enabled ZeroTrustDlpCustomProfile#ai_context_enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.allowedMatchCount">allowedMatchCount</a></code> | <code>number</code> | Related DLP policies will trigger when the match count exceeds the number set. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.confidenceThreshold">confidenceThreshold</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#confidence_threshold ZeroTrustDlpCustomProfile#confidence_threshold}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.contextAwareness">contextAwareness</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwareness">ZeroTrustDlpCustomProfileContextAwareness</a></code> | Scan the context of predefined entries to only return matches surrounded by keywords. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.description">description</a></code> | <code>string</code> | The description of the profile. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.entries">entries</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntries">ZeroTrustDlpCustomProfileEntries</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#entries ZeroTrustDlpCustomProfile#entries}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#name ZeroTrustDlpCustomProfile#name}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.ocrEnabled">ocrEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#ocr_enabled ZeroTrustDlpCustomProfile#ocr_enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.profiles">profiles</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfiles">ZeroTrustDlpCustomProfileProfiles</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#profiles ZeroTrustDlpCustomProfile#profiles}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.sharedEntries">sharedEntries</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntries">ZeroTrustDlpCustomProfileSharedEntries</a>[]</code> | Entries from other profiles (e.g. pre-defined Cloudflare profiles, or your Microsoft Information Protection profiles). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#account_id ZeroTrustDlpCustomProfile#account_id}.

---

##### `aiContextEnabled`<sup>Optional</sup> <a name="aiContextEnabled" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.aiContextEnabled"></a>

```typescript
public readonly aiContextEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#ai_context_enabled ZeroTrustDlpCustomProfile#ai_context_enabled}.

---

##### `allowedMatchCount`<sup>Optional</sup> <a name="allowedMatchCount" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.allowedMatchCount"></a>

```typescript
public readonly allowedMatchCount: number;
```

- *Type:* number

Related DLP policies will trigger when the match count exceeds the number set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#allowed_match_count ZeroTrustDlpCustomProfile#allowed_match_count}

---

##### `confidenceThreshold`<sup>Optional</sup> <a name="confidenceThreshold" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.confidenceThreshold"></a>

```typescript
public readonly confidenceThreshold: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#confidence_threshold ZeroTrustDlpCustomProfile#confidence_threshold}.

---

##### `contextAwareness`<sup>Optional</sup> <a name="contextAwareness" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.contextAwareness"></a>

```typescript
public readonly contextAwareness: ZeroTrustDlpCustomProfileContextAwareness;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwareness">ZeroTrustDlpCustomProfileContextAwareness</a>

Scan the context of predefined entries to only return matches surrounded by keywords.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#context_awareness ZeroTrustDlpCustomProfile#context_awareness}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#description ZeroTrustDlpCustomProfile#description}

---

##### `entries`<sup>Optional</sup> <a name="entries" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.entries"></a>

```typescript
public readonly entries: IResolvable | ZeroTrustDlpCustomProfileEntries[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntries">ZeroTrustDlpCustomProfileEntries</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#entries ZeroTrustDlpCustomProfile#entries}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#name ZeroTrustDlpCustomProfile#name}.

---

##### `ocrEnabled`<sup>Optional</sup> <a name="ocrEnabled" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.ocrEnabled"></a>

```typescript
public readonly ocrEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#ocr_enabled ZeroTrustDlpCustomProfile#ocr_enabled}.

---

##### `profiles`<sup>Optional</sup> <a name="profiles" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.profiles"></a>

```typescript
public readonly profiles: IResolvable | ZeroTrustDlpCustomProfileProfiles[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfiles">ZeroTrustDlpCustomProfileProfiles</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#profiles ZeroTrustDlpCustomProfile#profiles}.

---

##### `sharedEntries`<sup>Optional</sup> <a name="sharedEntries" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.sharedEntries"></a>

```typescript
public readonly sharedEntries: IResolvable | ZeroTrustDlpCustomProfileSharedEntries[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntries">ZeroTrustDlpCustomProfileSharedEntries</a>[]

Entries from other profiles (e.g. pre-defined Cloudflare profiles, or your Microsoft Information Protection profiles).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#shared_entries ZeroTrustDlpCustomProfile#shared_entries}

---

### ZeroTrustDlpCustomProfileContextAwareness <a name="ZeroTrustDlpCustomProfileContextAwareness" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwareness"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwareness.Initializer"></a>

```typescript
import { zeroTrustDlpCustomProfile } from '@cdktf/provider-cloudflare'

const zeroTrustDlpCustomProfileContextAwareness: zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwareness = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwareness.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, scan the context of predefined entries to only return matches surrounded by keywords. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwareness.property.skip">skip</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkip">ZeroTrustDlpCustomProfileContextAwarenessSkip</a></code> | Content types to exclude from context analysis and return all matches. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwareness.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, scan the context of predefined entries to only return matches surrounded by keywords.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#enabled ZeroTrustDlpCustomProfile#enabled}

---

##### `skip`<sup>Required</sup> <a name="skip" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwareness.property.skip"></a>

```typescript
public readonly skip: ZeroTrustDlpCustomProfileContextAwarenessSkip;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkip">ZeroTrustDlpCustomProfileContextAwarenessSkip</a>

Content types to exclude from context analysis and return all matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#skip ZeroTrustDlpCustomProfile#skip}

---

### ZeroTrustDlpCustomProfileContextAwarenessSkip <a name="ZeroTrustDlpCustomProfileContextAwarenessSkip" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkip"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkip.Initializer"></a>

```typescript
import { zeroTrustDlpCustomProfile } from '@cdktf/provider-cloudflare'

const zeroTrustDlpCustomProfileContextAwarenessSkip: zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkip = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkip.property.files">files</a></code> | <code>boolean \| cdktf.IResolvable</code> | If the content type is a file, skip context analysis and return all matches. |

---

##### `files`<sup>Required</sup> <a name="files" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkip.property.files"></a>

```typescript
public readonly files: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If the content type is a file, skip context analysis and return all matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#files ZeroTrustDlpCustomProfile#files}

---

### ZeroTrustDlpCustomProfileEntries <a name="ZeroTrustDlpCustomProfileEntries" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntries.Initializer"></a>

```typescript
import { zeroTrustDlpCustomProfile } from '@cdktf/provider-cloudflare'

const zeroTrustDlpCustomProfileEntries: zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntries = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntries.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#enabled ZeroTrustDlpCustomProfile#enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntries.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#name ZeroTrustDlpCustomProfile#name}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntries.property.pattern">pattern</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPattern">ZeroTrustDlpCustomProfileEntriesPattern</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#pattern ZeroTrustDlpCustomProfile#pattern}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntries.property.words">words</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#words ZeroTrustDlpCustomProfile#words}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntries.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#enabled ZeroTrustDlpCustomProfile#enabled}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntries.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#name ZeroTrustDlpCustomProfile#name}.

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntries.property.pattern"></a>

```typescript
public readonly pattern: ZeroTrustDlpCustomProfileEntriesPattern;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPattern">ZeroTrustDlpCustomProfileEntriesPattern</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#pattern ZeroTrustDlpCustomProfile#pattern}.

---

##### `words`<sup>Optional</sup> <a name="words" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntries.property.words"></a>

```typescript
public readonly words: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#words ZeroTrustDlpCustomProfile#words}.

---

### ZeroTrustDlpCustomProfileEntriesPattern <a name="ZeroTrustDlpCustomProfileEntriesPattern" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPattern.Initializer"></a>

```typescript
import { zeroTrustDlpCustomProfile } from '@cdktf/provider-cloudflare'

const zeroTrustDlpCustomProfileEntriesPattern: zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPattern = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPattern.property.regex">regex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#regex ZeroTrustDlpCustomProfile#regex}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPattern.property.validation">validation</a></code> | <code>string</code> | Available values: "luhn". |

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPattern.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#regex ZeroTrustDlpCustomProfile#regex}.

---

##### `validation`<sup>Optional</sup> <a name="validation" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPattern.property.validation"></a>

```typescript
public readonly validation: string;
```

- *Type:* string

Available values: "luhn".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#validation ZeroTrustDlpCustomProfile#validation}

---

### ZeroTrustDlpCustomProfileProfiles <a name="ZeroTrustDlpCustomProfileProfiles" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfiles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfiles.Initializer"></a>

```typescript
import { zeroTrustDlpCustomProfile } from '@cdktf/provider-cloudflare'

const zeroTrustDlpCustomProfileProfiles: zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfiles = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfiles.property.entries">entries</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntries">ZeroTrustDlpCustomProfileProfilesEntries</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#entries ZeroTrustDlpCustomProfile#entries}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfiles.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#name ZeroTrustDlpCustomProfile#name}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfiles.property.aiContextEnabled">aiContextEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#ai_context_enabled ZeroTrustDlpCustomProfile#ai_context_enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfiles.property.allowedMatchCount">allowedMatchCount</a></code> | <code>number</code> | Related DLP policies will trigger when the match count exceeds the number set. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfiles.property.confidenceThreshold">confidenceThreshold</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#confidence_threshold ZeroTrustDlpCustomProfile#confidence_threshold}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfiles.property.contextAwareness">contextAwareness</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwareness">ZeroTrustDlpCustomProfileProfilesContextAwareness</a></code> | Scan the context of predefined entries to only return matches surrounded by keywords. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfiles.property.description">description</a></code> | <code>string</code> | The description of the profile. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfiles.property.ocrEnabled">ocrEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#ocr_enabled ZeroTrustDlpCustomProfile#ocr_enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfiles.property.sharedEntries">sharedEntries</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntries">ZeroTrustDlpCustomProfileProfilesSharedEntries</a>[]</code> | Entries from other profiles (e.g. pre-defined Cloudflare profiles, or your Microsoft Information Protection profiles). |

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfiles.property.entries"></a>

```typescript
public readonly entries: IResolvable | ZeroTrustDlpCustomProfileProfilesEntries[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntries">ZeroTrustDlpCustomProfileProfilesEntries</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#entries ZeroTrustDlpCustomProfile#entries}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfiles.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#name ZeroTrustDlpCustomProfile#name}.

---

##### `aiContextEnabled`<sup>Optional</sup> <a name="aiContextEnabled" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfiles.property.aiContextEnabled"></a>

```typescript
public readonly aiContextEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#ai_context_enabled ZeroTrustDlpCustomProfile#ai_context_enabled}.

---

##### `allowedMatchCount`<sup>Optional</sup> <a name="allowedMatchCount" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfiles.property.allowedMatchCount"></a>

```typescript
public readonly allowedMatchCount: number;
```

- *Type:* number

Related DLP policies will trigger when the match count exceeds the number set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#allowed_match_count ZeroTrustDlpCustomProfile#allowed_match_count}

---

##### `confidenceThreshold`<sup>Optional</sup> <a name="confidenceThreshold" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfiles.property.confidenceThreshold"></a>

```typescript
public readonly confidenceThreshold: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#confidence_threshold ZeroTrustDlpCustomProfile#confidence_threshold}.

---

##### `contextAwareness`<sup>Optional</sup> <a name="contextAwareness" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfiles.property.contextAwareness"></a>

```typescript
public readonly contextAwareness: ZeroTrustDlpCustomProfileProfilesContextAwareness;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwareness">ZeroTrustDlpCustomProfileProfilesContextAwareness</a>

Scan the context of predefined entries to only return matches surrounded by keywords.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#context_awareness ZeroTrustDlpCustomProfile#context_awareness}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfiles.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#description ZeroTrustDlpCustomProfile#description}

---

##### `ocrEnabled`<sup>Optional</sup> <a name="ocrEnabled" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfiles.property.ocrEnabled"></a>

```typescript
public readonly ocrEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#ocr_enabled ZeroTrustDlpCustomProfile#ocr_enabled}.

---

##### `sharedEntries`<sup>Optional</sup> <a name="sharedEntries" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfiles.property.sharedEntries"></a>

```typescript
public readonly sharedEntries: IResolvable | ZeroTrustDlpCustomProfileProfilesSharedEntries[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntries">ZeroTrustDlpCustomProfileProfilesSharedEntries</a>[]

Entries from other profiles (e.g. pre-defined Cloudflare profiles, or your Microsoft Information Protection profiles).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#shared_entries ZeroTrustDlpCustomProfile#shared_entries}

---

### ZeroTrustDlpCustomProfileProfilesContextAwareness <a name="ZeroTrustDlpCustomProfileProfilesContextAwareness" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwareness"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwareness.Initializer"></a>

```typescript
import { zeroTrustDlpCustomProfile } from '@cdktf/provider-cloudflare'

const zeroTrustDlpCustomProfileProfilesContextAwareness: zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwareness = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwareness.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, scan the context of predefined entries to only return matches surrounded by keywords. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwareness.property.skip">skip</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkip">ZeroTrustDlpCustomProfileProfilesContextAwarenessSkip</a></code> | Content types to exclude from context analysis and return all matches. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwareness.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, scan the context of predefined entries to only return matches surrounded by keywords.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#enabled ZeroTrustDlpCustomProfile#enabled}

---

##### `skip`<sup>Required</sup> <a name="skip" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwareness.property.skip"></a>

```typescript
public readonly skip: ZeroTrustDlpCustomProfileProfilesContextAwarenessSkip;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkip">ZeroTrustDlpCustomProfileProfilesContextAwarenessSkip</a>

Content types to exclude from context analysis and return all matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#skip ZeroTrustDlpCustomProfile#skip}

---

### ZeroTrustDlpCustomProfileProfilesContextAwarenessSkip <a name="ZeroTrustDlpCustomProfileProfilesContextAwarenessSkip" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkip"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkip.Initializer"></a>

```typescript
import { zeroTrustDlpCustomProfile } from '@cdktf/provider-cloudflare'

const zeroTrustDlpCustomProfileProfilesContextAwarenessSkip: zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkip = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkip.property.files">files</a></code> | <code>boolean \| cdktf.IResolvable</code> | If the content type is a file, skip context analysis and return all matches. |

---

##### `files`<sup>Required</sup> <a name="files" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkip.property.files"></a>

```typescript
public readonly files: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If the content type is a file, skip context analysis and return all matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#files ZeroTrustDlpCustomProfile#files}

---

### ZeroTrustDlpCustomProfileProfilesEntries <a name="ZeroTrustDlpCustomProfileProfilesEntries" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntries.Initializer"></a>

```typescript
import { zeroTrustDlpCustomProfile } from '@cdktf/provider-cloudflare'

const zeroTrustDlpCustomProfileProfilesEntries: zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntries = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntries.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#enabled ZeroTrustDlpCustomProfile#enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntries.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#name ZeroTrustDlpCustomProfile#name}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntries.property.pattern">pattern</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPattern">ZeroTrustDlpCustomProfileProfilesEntriesPattern</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#pattern ZeroTrustDlpCustomProfile#pattern}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntries.property.words">words</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#words ZeroTrustDlpCustomProfile#words}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntries.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#enabled ZeroTrustDlpCustomProfile#enabled}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntries.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#name ZeroTrustDlpCustomProfile#name}.

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntries.property.pattern"></a>

```typescript
public readonly pattern: ZeroTrustDlpCustomProfileProfilesEntriesPattern;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPattern">ZeroTrustDlpCustomProfileProfilesEntriesPattern</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#pattern ZeroTrustDlpCustomProfile#pattern}.

---

##### `words`<sup>Optional</sup> <a name="words" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntries.property.words"></a>

```typescript
public readonly words: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#words ZeroTrustDlpCustomProfile#words}.

---

### ZeroTrustDlpCustomProfileProfilesEntriesPattern <a name="ZeroTrustDlpCustomProfileProfilesEntriesPattern" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPattern.Initializer"></a>

```typescript
import { zeroTrustDlpCustomProfile } from '@cdktf/provider-cloudflare'

const zeroTrustDlpCustomProfileProfilesEntriesPattern: zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPattern = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPattern.property.regex">regex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#regex ZeroTrustDlpCustomProfile#regex}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPattern.property.validation">validation</a></code> | <code>string</code> | Available values: "luhn". |

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPattern.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#regex ZeroTrustDlpCustomProfile#regex}.

---

##### `validation`<sup>Optional</sup> <a name="validation" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPattern.property.validation"></a>

```typescript
public readonly validation: string;
```

- *Type:* string

Available values: "luhn".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#validation ZeroTrustDlpCustomProfile#validation}

---

### ZeroTrustDlpCustomProfileProfilesSharedEntries <a name="ZeroTrustDlpCustomProfileProfilesSharedEntries" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntries.Initializer"></a>

```typescript
import { zeroTrustDlpCustomProfile } from '@cdktf/provider-cloudflare'

const zeroTrustDlpCustomProfileProfilesSharedEntries: zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntries = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntries.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#enabled ZeroTrustDlpCustomProfile#enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntries.property.entryId">entryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#entry_id ZeroTrustDlpCustomProfile#entry_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntries.property.entryType">entryType</a></code> | <code>string</code> | Available values: "custom". |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntries.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#enabled ZeroTrustDlpCustomProfile#enabled}.

---

##### `entryId`<sup>Required</sup> <a name="entryId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntries.property.entryId"></a>

```typescript
public readonly entryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#entry_id ZeroTrustDlpCustomProfile#entry_id}.

---

##### `entryType`<sup>Required</sup> <a name="entryType" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntries.property.entryType"></a>

```typescript
public readonly entryType: string;
```

- *Type:* string

Available values: "custom".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#entry_type ZeroTrustDlpCustomProfile#entry_type}

---

### ZeroTrustDlpCustomProfileSharedEntries <a name="ZeroTrustDlpCustomProfileSharedEntries" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntries.Initializer"></a>

```typescript
import { zeroTrustDlpCustomProfile } from '@cdktf/provider-cloudflare'

const zeroTrustDlpCustomProfileSharedEntries: zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntries = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntries.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#enabled ZeroTrustDlpCustomProfile#enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntries.property.entryId">entryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#entry_id ZeroTrustDlpCustomProfile#entry_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntries.property.entryType">entryType</a></code> | <code>string</code> | Available values: "custom". |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntries.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#enabled ZeroTrustDlpCustomProfile#enabled}.

---

##### `entryId`<sup>Required</sup> <a name="entryId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntries.property.entryId"></a>

```typescript
public readonly entryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#entry_id ZeroTrustDlpCustomProfile#entry_id}.

---

##### `entryType`<sup>Required</sup> <a name="entryType" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntries.property.entryType"></a>

```typescript
public readonly entryType: string;
```

- *Type:* string

Available values: "custom".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_dlp_custom_profile#entry_type ZeroTrustDlpCustomProfile#entry_type}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustDlpCustomProfileContextAwarenessOutputReference <a name="ZeroTrustDlpCustomProfileContextAwarenessOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.Initializer"></a>

```typescript
import { zeroTrustDlpCustomProfile } from '@cdktf/provider-cloudflare'

new zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.putSkip">putSkip</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSkip` <a name="putSkip" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.putSkip"></a>

```typescript
public putSkip(value: ZeroTrustDlpCustomProfileContextAwarenessSkip): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.putSkip.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkip">ZeroTrustDlpCustomProfileContextAwarenessSkip</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.property.skip">skip</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference">ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.property.skipInput">skipInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkip">ZeroTrustDlpCustomProfileContextAwarenessSkip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwareness">ZeroTrustDlpCustomProfileContextAwareness</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `skip`<sup>Required</sup> <a name="skip" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.property.skip"></a>

```typescript
public readonly skip: ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference">ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipInput`<sup>Optional</sup> <a name="skipInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.property.skipInput"></a>

```typescript
public readonly skipInput: ZeroTrustDlpCustomProfileContextAwarenessSkip;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkip">ZeroTrustDlpCustomProfileContextAwarenessSkip</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustDlpCustomProfileContextAwareness;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwareness">ZeroTrustDlpCustomProfileContextAwareness</a>

---


### ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference <a name="ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.Initializer"></a>

```typescript
import { zeroTrustDlpCustomProfile } from '@cdktf/provider-cloudflare'

new zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.property.filesInput">filesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.property.files">files</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkip">ZeroTrustDlpCustomProfileContextAwarenessSkip</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filesInput`<sup>Optional</sup> <a name="filesInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.property.filesInput"></a>

```typescript
public readonly filesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `files`<sup>Required</sup> <a name="files" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.property.files"></a>

```typescript
public readonly files: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ZeroTrustDlpCustomProfileContextAwarenessSkip;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkip">ZeroTrustDlpCustomProfileContextAwarenessSkip</a>

---


### ZeroTrustDlpCustomProfileEntriesList <a name="ZeroTrustDlpCustomProfileEntriesList" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.Initializer"></a>

```typescript
import { zeroTrustDlpCustomProfile } from '@cdktf/provider-cloudflare'

new zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.get"></a>

```typescript
public get(index: number): ZeroTrustDlpCustomProfileEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntries">ZeroTrustDlpCustomProfileEntries</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustDlpCustomProfileEntries[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntries">ZeroTrustDlpCustomProfileEntries</a>[]

---


### ZeroTrustDlpCustomProfileEntriesOutputReference <a name="ZeroTrustDlpCustomProfileEntriesOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.Initializer"></a>

```typescript
import { zeroTrustDlpCustomProfile } from '@cdktf/provider-cloudflare'

new zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.putPattern">putPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.resetPattern">resetPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.resetWords">resetWords</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPattern` <a name="putPattern" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.putPattern"></a>

```typescript
public putPattern(value: ZeroTrustDlpCustomProfileEntriesPattern): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.putPattern.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPattern">ZeroTrustDlpCustomProfileEntriesPattern</a>

---

##### `resetPattern` <a name="resetPattern" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.resetPattern"></a>

```typescript
public resetPattern(): void
```

##### `resetWords` <a name="resetWords" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.resetWords"></a>

```typescript
public resetWords(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.property.pattern">pattern</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference">ZeroTrustDlpCustomProfileEntriesPatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.property.patternInput">patternInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPattern">ZeroTrustDlpCustomProfileEntriesPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.property.wordsInput">wordsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.property.words">words</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntries">ZeroTrustDlpCustomProfileEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.property.pattern"></a>

```typescript
public readonly pattern: ZeroTrustDlpCustomProfileEntriesPatternOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference">ZeroTrustDlpCustomProfileEntriesPatternOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.property.patternInput"></a>

```typescript
public readonly patternInput: IResolvable | ZeroTrustDlpCustomProfileEntriesPattern;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPattern">ZeroTrustDlpCustomProfileEntriesPattern</a>

---

##### `wordsInput`<sup>Optional</sup> <a name="wordsInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.property.wordsInput"></a>

```typescript
public readonly wordsInput: string[];
```

- *Type:* string[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `words`<sup>Required</sup> <a name="words" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.property.words"></a>

```typescript
public readonly words: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustDlpCustomProfileEntries;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntries">ZeroTrustDlpCustomProfileEntries</a>

---


### ZeroTrustDlpCustomProfileEntriesPatternOutputReference <a name="ZeroTrustDlpCustomProfileEntriesPatternOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.Initializer"></a>

```typescript
import { zeroTrustDlpCustomProfile } from '@cdktf/provider-cloudflare'

new zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.resetValidation">resetValidation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValidation` <a name="resetValidation" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.resetValidation"></a>

```typescript
public resetValidation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.property.regexInput">regexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.property.validationInput">validationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.property.regex">regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.property.validation">validation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPattern">ZeroTrustDlpCustomProfileEntriesPattern</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: string;
```

- *Type:* string

---

##### `validationInput`<sup>Optional</sup> <a name="validationInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.property.validationInput"></a>

```typescript
public readonly validationInput: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

---

##### `validation`<sup>Required</sup> <a name="validation" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.property.validation"></a>

```typescript
public readonly validation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustDlpCustomProfileEntriesPattern;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPattern">ZeroTrustDlpCustomProfileEntriesPattern</a>

---


### ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference <a name="ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.Initializer"></a>

```typescript
import { zeroTrustDlpCustomProfile } from '@cdktf/provider-cloudflare'

new zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.putSkip">putSkip</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSkip` <a name="putSkip" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.putSkip"></a>

```typescript
public putSkip(value: ZeroTrustDlpCustomProfileProfilesContextAwarenessSkip): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.putSkip.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkip">ZeroTrustDlpCustomProfileProfilesContextAwarenessSkip</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.property.skip">skip</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference">ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.property.skipInput">skipInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkip">ZeroTrustDlpCustomProfileProfilesContextAwarenessSkip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwareness">ZeroTrustDlpCustomProfileProfilesContextAwareness</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `skip`<sup>Required</sup> <a name="skip" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.property.skip"></a>

```typescript
public readonly skip: ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference">ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipInput`<sup>Optional</sup> <a name="skipInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.property.skipInput"></a>

```typescript
public readonly skipInput: ZeroTrustDlpCustomProfileProfilesContextAwarenessSkip;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkip">ZeroTrustDlpCustomProfileProfilesContextAwarenessSkip</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustDlpCustomProfileProfilesContextAwareness;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwareness">ZeroTrustDlpCustomProfileProfilesContextAwareness</a>

---


### ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference <a name="ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.Initializer"></a>

```typescript
import { zeroTrustDlpCustomProfile } from '@cdktf/provider-cloudflare'

new zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.property.filesInput">filesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.property.files">files</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkip">ZeroTrustDlpCustomProfileProfilesContextAwarenessSkip</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filesInput`<sup>Optional</sup> <a name="filesInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.property.filesInput"></a>

```typescript
public readonly filesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `files`<sup>Required</sup> <a name="files" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.property.files"></a>

```typescript
public readonly files: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkipOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ZeroTrustDlpCustomProfileProfilesContextAwarenessSkip;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessSkip">ZeroTrustDlpCustomProfileProfilesContextAwarenessSkip</a>

---


### ZeroTrustDlpCustomProfileProfilesEntriesList <a name="ZeroTrustDlpCustomProfileProfilesEntriesList" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesList.Initializer"></a>

```typescript
import { zeroTrustDlpCustomProfile } from '@cdktf/provider-cloudflare'

new zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesList.get"></a>

```typescript
public get(index: number): ZeroTrustDlpCustomProfileProfilesEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntries">ZeroTrustDlpCustomProfileProfilesEntries</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustDlpCustomProfileProfilesEntries[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntries">ZeroTrustDlpCustomProfileProfilesEntries</a>[]

---


### ZeroTrustDlpCustomProfileProfilesEntriesOutputReference <a name="ZeroTrustDlpCustomProfileProfilesEntriesOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.Initializer"></a>

```typescript
import { zeroTrustDlpCustomProfile } from '@cdktf/provider-cloudflare'

new zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.putPattern">putPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.resetPattern">resetPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.resetWords">resetWords</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPattern` <a name="putPattern" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.putPattern"></a>

```typescript
public putPattern(value: ZeroTrustDlpCustomProfileProfilesEntriesPattern): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.putPattern.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPattern">ZeroTrustDlpCustomProfileProfilesEntriesPattern</a>

---

##### `resetPattern` <a name="resetPattern" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.resetPattern"></a>

```typescript
public resetPattern(): void
```

##### `resetWords` <a name="resetWords" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.resetWords"></a>

```typescript
public resetWords(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.property.pattern">pattern</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference">ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.property.patternInput">patternInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPattern">ZeroTrustDlpCustomProfileProfilesEntriesPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.property.wordsInput">wordsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.property.words">words</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntries">ZeroTrustDlpCustomProfileProfilesEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.property.pattern"></a>

```typescript
public readonly pattern: ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference">ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.property.patternInput"></a>

```typescript
public readonly patternInput: IResolvable | ZeroTrustDlpCustomProfileProfilesEntriesPattern;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPattern">ZeroTrustDlpCustomProfileProfilesEntriesPattern</a>

---

##### `wordsInput`<sup>Optional</sup> <a name="wordsInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.property.wordsInput"></a>

```typescript
public readonly wordsInput: string[];
```

- *Type:* string[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `words`<sup>Required</sup> <a name="words" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.property.words"></a>

```typescript
public readonly words: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ZeroTrustDlpCustomProfileProfilesEntries;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntries">ZeroTrustDlpCustomProfileProfilesEntries</a>

---


### ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference <a name="ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.Initializer"></a>

```typescript
import { zeroTrustDlpCustomProfile } from '@cdktf/provider-cloudflare'

new zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.resetValidation">resetValidation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValidation` <a name="resetValidation" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.resetValidation"></a>

```typescript
public resetValidation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.property.regexInput">regexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.property.validationInput">validationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.property.regex">regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.property.validation">validation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPattern">ZeroTrustDlpCustomProfileProfilesEntriesPattern</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: string;
```

- *Type:* string

---

##### `validationInput`<sup>Optional</sup> <a name="validationInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.property.validationInput"></a>

```typescript
public readonly validationInput: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

---

##### `validation`<sup>Required</sup> <a name="validation" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.property.validation"></a>

```typescript
public readonly validation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPatternOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustDlpCustomProfileProfilesEntriesPattern;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesPattern">ZeroTrustDlpCustomProfileProfilesEntriesPattern</a>

---


### ZeroTrustDlpCustomProfileProfilesList <a name="ZeroTrustDlpCustomProfileProfilesList" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesList.Initializer"></a>

```typescript
import { zeroTrustDlpCustomProfile } from '@cdktf/provider-cloudflare'

new zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesList.get"></a>

```typescript
public get(index: number): ZeroTrustDlpCustomProfileProfilesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfiles">ZeroTrustDlpCustomProfileProfiles</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustDlpCustomProfileProfiles[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfiles">ZeroTrustDlpCustomProfileProfiles</a>[]

---


### ZeroTrustDlpCustomProfileProfilesOutputReference <a name="ZeroTrustDlpCustomProfileProfilesOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.Initializer"></a>

```typescript
import { zeroTrustDlpCustomProfile } from '@cdktf/provider-cloudflare'

new zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.putContextAwareness">putContextAwareness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.putEntries">putEntries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.putSharedEntries">putSharedEntries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.resetAiContextEnabled">resetAiContextEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.resetAllowedMatchCount">resetAllowedMatchCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.resetConfidenceThreshold">resetConfidenceThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.resetContextAwareness">resetContextAwareness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.resetOcrEnabled">resetOcrEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.resetSharedEntries">resetSharedEntries</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContextAwareness` <a name="putContextAwareness" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.putContextAwareness"></a>

```typescript
public putContextAwareness(value: ZeroTrustDlpCustomProfileProfilesContextAwareness): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.putContextAwareness.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwareness">ZeroTrustDlpCustomProfileProfilesContextAwareness</a>

---

##### `putEntries` <a name="putEntries" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.putEntries"></a>

```typescript
public putEntries(value: IResolvable | ZeroTrustDlpCustomProfileProfilesEntries[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.putEntries.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntries">ZeroTrustDlpCustomProfileProfilesEntries</a>[]

---

##### `putSharedEntries` <a name="putSharedEntries" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.putSharedEntries"></a>

```typescript
public putSharedEntries(value: IResolvable | ZeroTrustDlpCustomProfileProfilesSharedEntries[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.putSharedEntries.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntries">ZeroTrustDlpCustomProfileProfilesSharedEntries</a>[]

---

##### `resetAiContextEnabled` <a name="resetAiContextEnabled" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.resetAiContextEnabled"></a>

```typescript
public resetAiContextEnabled(): void
```

##### `resetAllowedMatchCount` <a name="resetAllowedMatchCount" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.resetAllowedMatchCount"></a>

```typescript
public resetAllowedMatchCount(): void
```

##### `resetConfidenceThreshold` <a name="resetConfidenceThreshold" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.resetConfidenceThreshold"></a>

```typescript
public resetConfidenceThreshold(): void
```

##### `resetContextAwareness` <a name="resetContextAwareness" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.resetContextAwareness"></a>

```typescript
public resetContextAwareness(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetOcrEnabled` <a name="resetOcrEnabled" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.resetOcrEnabled"></a>

```typescript
public resetOcrEnabled(): void
```

##### `resetSharedEntries` <a name="resetSharedEntries" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.resetSharedEntries"></a>

```typescript
public resetSharedEntries(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.property.contextAwareness">contextAwareness</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference">ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.property.entries">entries</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesList">ZeroTrustDlpCustomProfileProfilesEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.property.sharedEntries">sharedEntries</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesList">ZeroTrustDlpCustomProfileProfilesSharedEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.property.aiContextEnabledInput">aiContextEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.property.allowedMatchCountInput">allowedMatchCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.property.confidenceThresholdInput">confidenceThresholdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.property.contextAwarenessInput">contextAwarenessInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwareness">ZeroTrustDlpCustomProfileProfilesContextAwareness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.property.entriesInput">entriesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntries">ZeroTrustDlpCustomProfileProfilesEntries</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.property.ocrEnabledInput">ocrEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.property.sharedEntriesInput">sharedEntriesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntries">ZeroTrustDlpCustomProfileProfilesSharedEntries</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.property.aiContextEnabled">aiContextEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.property.allowedMatchCount">allowedMatchCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.property.confidenceThreshold">confidenceThreshold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.property.ocrEnabled">ocrEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfiles">ZeroTrustDlpCustomProfileProfiles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contextAwareness`<sup>Required</sup> <a name="contextAwareness" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.property.contextAwareness"></a>

```typescript
public readonly contextAwareness: ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference">ZeroTrustDlpCustomProfileProfilesContextAwarenessOutputReference</a>

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.property.entries"></a>

```typescript
public readonly entries: ZeroTrustDlpCustomProfileProfilesEntriesList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntriesList">ZeroTrustDlpCustomProfileProfilesEntriesList</a>

---

##### `sharedEntries`<sup>Required</sup> <a name="sharedEntries" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.property.sharedEntries"></a>

```typescript
public readonly sharedEntries: ZeroTrustDlpCustomProfileProfilesSharedEntriesList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesList">ZeroTrustDlpCustomProfileProfilesSharedEntriesList</a>

---

##### `aiContextEnabledInput`<sup>Optional</sup> <a name="aiContextEnabledInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.property.aiContextEnabledInput"></a>

```typescript
public readonly aiContextEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedMatchCountInput`<sup>Optional</sup> <a name="allowedMatchCountInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.property.allowedMatchCountInput"></a>

```typescript
public readonly allowedMatchCountInput: number;
```

- *Type:* number

---

##### `confidenceThresholdInput`<sup>Optional</sup> <a name="confidenceThresholdInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.property.confidenceThresholdInput"></a>

```typescript
public readonly confidenceThresholdInput: string;
```

- *Type:* string

---

##### `contextAwarenessInput`<sup>Optional</sup> <a name="contextAwarenessInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.property.contextAwarenessInput"></a>

```typescript
public readonly contextAwarenessInput: IResolvable | ZeroTrustDlpCustomProfileProfilesContextAwareness;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesContextAwareness">ZeroTrustDlpCustomProfileProfilesContextAwareness</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `entriesInput`<sup>Optional</sup> <a name="entriesInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.property.entriesInput"></a>

```typescript
public readonly entriesInput: IResolvable | ZeroTrustDlpCustomProfileProfilesEntries[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesEntries">ZeroTrustDlpCustomProfileProfilesEntries</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ocrEnabledInput`<sup>Optional</sup> <a name="ocrEnabledInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.property.ocrEnabledInput"></a>

```typescript
public readonly ocrEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sharedEntriesInput`<sup>Optional</sup> <a name="sharedEntriesInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.property.sharedEntriesInput"></a>

```typescript
public readonly sharedEntriesInput: IResolvable | ZeroTrustDlpCustomProfileProfilesSharedEntries[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntries">ZeroTrustDlpCustomProfileProfilesSharedEntries</a>[]

---

##### `aiContextEnabled`<sup>Required</sup> <a name="aiContextEnabled" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.property.aiContextEnabled"></a>

```typescript
public readonly aiContextEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedMatchCount`<sup>Required</sup> <a name="allowedMatchCount" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.property.allowedMatchCount"></a>

```typescript
public readonly allowedMatchCount: number;
```

- *Type:* number

---

##### `confidenceThreshold`<sup>Required</sup> <a name="confidenceThreshold" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.property.confidenceThreshold"></a>

```typescript
public readonly confidenceThreshold: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ocrEnabled`<sup>Required</sup> <a name="ocrEnabled" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.property.ocrEnabled"></a>

```typescript
public readonly ocrEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustDlpCustomProfileProfiles;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfiles">ZeroTrustDlpCustomProfileProfiles</a>

---


### ZeroTrustDlpCustomProfileProfilesSharedEntriesList <a name="ZeroTrustDlpCustomProfileProfilesSharedEntriesList" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesList.Initializer"></a>

```typescript
import { zeroTrustDlpCustomProfile } from '@cdktf/provider-cloudflare'

new zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesList.get"></a>

```typescript
public get(index: number): ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntries">ZeroTrustDlpCustomProfileProfilesSharedEntries</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustDlpCustomProfileProfilesSharedEntries[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntries">ZeroTrustDlpCustomProfileProfilesSharedEntries</a>[]

---


### ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference <a name="ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.Initializer"></a>

```typescript
import { zeroTrustDlpCustomProfile } from '@cdktf/provider-cloudflare'

new zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.property.entryIdInput">entryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.property.entryTypeInput">entryTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.property.entryId">entryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.property.entryType">entryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntries">ZeroTrustDlpCustomProfileProfilesSharedEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `entryIdInput`<sup>Optional</sup> <a name="entryIdInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.property.entryIdInput"></a>

```typescript
public readonly entryIdInput: string;
```

- *Type:* string

---

##### `entryTypeInput`<sup>Optional</sup> <a name="entryTypeInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.property.entryTypeInput"></a>

```typescript
public readonly entryTypeInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `entryId`<sup>Required</sup> <a name="entryId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.property.entryId"></a>

```typescript
public readonly entryId: string;
```

- *Type:* string

---

##### `entryType`<sup>Required</sup> <a name="entryType" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.property.entryType"></a>

```typescript
public readonly entryType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustDlpCustomProfileProfilesSharedEntries;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileProfilesSharedEntries">ZeroTrustDlpCustomProfileProfilesSharedEntries</a>

---


### ZeroTrustDlpCustomProfileSharedEntriesList <a name="ZeroTrustDlpCustomProfileSharedEntriesList" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.Initializer"></a>

```typescript
import { zeroTrustDlpCustomProfile } from '@cdktf/provider-cloudflare'

new zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.get"></a>

```typescript
public get(index: number): ZeroTrustDlpCustomProfileSharedEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntries">ZeroTrustDlpCustomProfileSharedEntries</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustDlpCustomProfileSharedEntries[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntries">ZeroTrustDlpCustomProfileSharedEntries</a>[]

---


### ZeroTrustDlpCustomProfileSharedEntriesOutputReference <a name="ZeroTrustDlpCustomProfileSharedEntriesOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.Initializer"></a>

```typescript
import { zeroTrustDlpCustomProfile } from '@cdktf/provider-cloudflare'

new zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.property.entryIdInput">entryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.property.entryTypeInput">entryTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.property.entryId">entryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.property.entryType">entryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntries">ZeroTrustDlpCustomProfileSharedEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `entryIdInput`<sup>Optional</sup> <a name="entryIdInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.property.entryIdInput"></a>

```typescript
public readonly entryIdInput: string;
```

- *Type:* string

---

##### `entryTypeInput`<sup>Optional</sup> <a name="entryTypeInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.property.entryTypeInput"></a>

```typescript
public readonly entryTypeInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `entryId`<sup>Required</sup> <a name="entryId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.property.entryId"></a>

```typescript
public readonly entryId: string;
```

- *Type:* string

---

##### `entryType`<sup>Required</sup> <a name="entryType" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.property.entryType"></a>

```typescript
public readonly entryType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustDlpCustomProfileSharedEntries;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntries">ZeroTrustDlpCustomProfileSharedEntries</a>

---



